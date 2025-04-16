"use server";

import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Debug function
const debugDB = (message, data) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[DB Debug] ${message}:`, data);
  }
};

export async function createRoleMentor(role) {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    debugDB("Current user", user);

    // Debug Prisma instance
    if (process.env.NODE_ENV === "development") {
      console.log("Prisma DB instance:", !!db);
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    debugDB("Found DB user", dbUser);

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    // Generate learning path using AI
    const prompt = `
      Create a detailed 30-day learning path for becoming a ${role}. 
      Return the response in the following JSON format:
      {
        "tasks": [
          {
            "day": number,
            "title": "string",
            "description": "string"
          }
        ]
      }
      
      Each day should have 2-3 tasks that build upon each other.
      The tasks should be specific, actionable, and include resources or links when possible.
      Focus on practical learning and hands-on projects.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.candidates[0].content.parts[0].text || "";
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const learningPath = JSON.parse(cleanedText);

    debugDB("Generated learning path", learningPath);

    // Create role mentor and tasks
    const roleMentor = await db.roleMentor.create({
      data: {
        userId: dbUser.id,
        role,
        tasks: {
          create: learningPath.tasks.map(task => ({
            title: task.title,
            description: task.description,
            day: task.day
          }))
        }
      }
    });

    debugDB("Created role mentor", roleMentor);
    return roleMentor;
  } catch (error) {
    console.error("Error in createRoleMentor:", error);
    debugDB("Error details", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    throw new Error(error.message || "Failed to create role mentor");
  }
}

export async function getRoleMentor() {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    debugDB("Current user", user);

    // Debug Prisma instance
    if (process.env.NODE_ENV === "development") {
      console.log("Prisma DB instance:", !!db);
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    debugDB("Found DB user", dbUser);

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    const roleMentor = await db.roleMentor.findFirst({
      where: {
        userId: dbUser.id,
        status: "active"
      },
      include: {
        tasks: {
          orderBy: {
            day: 'asc'
          }
        }
      }
    });

    debugDB("Found role mentor", roleMentor);
    return roleMentor;
  } catch (error) {
    console.error("Error in getRoleMentor:", error);
    debugDB("Error details", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    throw new Error(error.message || "Failed to retrieve role mentor");
  }
}

export async function completeTask(taskId) {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    debugDB("Current user", user);

    // Debug Prisma instance
    if (process.env.NODE_ENV === "development") {
      console.log("Prisma DB instance:", !!db);
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    debugDB("Found DB user", dbUser);

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    const task = await db.roleTask.update({
      where: {
        id: taskId,
        roleMentor: {
          userId: dbUser.id
        }
      },
      data: {
        isCompleted: true,
        completedAt: new Date()
      }
    });

    debugDB("Updated task", task);

    // Check if all tasks for the current day are completed
    const roleMentor = await db.roleMentor.findFirst({
      where: {
        userId: dbUser.id,
        status: "active"
      },
      include: {
        tasks: {
          where: {
            day: task.day
          }
        }
      }
    });

    debugDB("Found role mentor for day check", roleMentor);

    const allTasksCompleted = roleMentor.tasks.every(t => t.isCompleted);

    if (allTasksCompleted) {
      // Check if this was the last day
      const lastDay = Math.max(...roleMentor.tasks.map(t => t.day));
      if (task.day === lastDay) {
        await db.roleMentor.update({
          where: {
            id: roleMentor.id
          },
          data: {
            status: "completed"
          }
        });
        debugDB("Marked role mentor as completed", roleMentor.id);
      } else {
        await db.roleMentor.update({
          where: {
            id: roleMentor.id
          },
          data: {
            currentDay: roleMentor.currentDay + 1
          }
        });
        debugDB("Updated role mentor day", roleMentor.currentDay + 1);
      }
    }

    return task;
  } catch (error) {
    console.error("Error in completeTask:", error);
    debugDB("Error details", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    throw new Error(error.message || "Failed to complete task");
  }
}

export async function resetRoleMentor() {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    debugDB("Current user", user);

    // Debug Prisma instance
    if (process.env.NODE_ENV === "development") {
      console.log("Prisma DB instance:", !!db);
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    debugDB("Found DB user", dbUser);

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    const result = await db.roleMentor.updateMany({
      where: {
        userId: dbUser.id,
        status: "active"
      },
      data: {
        status: "completed"
      }
    });

    debugDB("Reset role mentor result", result);
    return result;
  } catch (error) {
    console.error("Error in resetRoleMentor:", error);
    debugDB("Error details", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    throw new Error(error.message || "Failed to reset role mentor");
  }
}

export async function getCompletedRoleMentors() {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    const completedMentors = await db.roleMentor.findMany({
      where: {
        userId: dbUser.id,
        status: "completed"
      },
      include: {
        tasks: true
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return completedMentors;
  } catch (error) {
    console.error("Error in getCompletedRoleMentors:", error);
    throw new Error(error.message || "Failed to retrieve completed role mentors");
  }
}

export async function deleteCompletedRoleMentor(roleMentorId) {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      throw new Error("User not found in database");
    }

    // First, delete all tasks associated with the role mentor
    await db.roleTask.deleteMany({
      where: {
        roleMentorId: roleMentorId
      }
    });

    // Then delete the role mentor
    await db.roleMentor.delete({
      where: {
        id: roleMentorId,
        userId: dbUser.id,
        status: "completed" // Only allow deletion of completed paths
      }
    });

    return true;
  } catch (error) {
    console.error("Error in deleteCompletedRoleMentor:", error);
    throw new Error(error.message || "Failed to delete completed role mentor");
  }
} 