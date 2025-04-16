"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { createRoleMentor, getRoleMentor, completeTask, resetRoleMentor, getCompletedRoleMentors, deleteCompletedRoleMentor } from "@/actions/role-mentor";
import { toast } from "sonner";
import { Loader2, Trash2 } from "lucide-react";

export default function RoleMentor() {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [roleMentor, setRoleMentor] = useState(null);
  const [completedPaths, setCompletedPaths] = useState([]);

  useEffect(() => {
    loadRoleMentor();
    loadCompletedPaths();
  }, []);

  const loadCompletedPaths = async () => {
    try {
      const data = await getCompletedRoleMentors();
      setCompletedPaths(data);
    } catch (error) {
      console.error("Error loading completed paths:", error);
    }
  };

  const loadRoleMentor = async () => {
    try {
      const data = await getRoleMentor();
      setRoleMentor(data);
      if (data && data.tasks.every(task => task.isCompleted)) {
        loadCompletedPaths(); // Reload completed paths when current path is completed
      }
    } catch (error) {
      console.error("Error loading role mentor:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role.trim()) {
      toast.error("Please enter a role");
      return;
    }

    setIsLoading(true);
    try {
      await createRoleMentor(role);
      toast.success("Learning path created successfully!");
      setRole("");
      loadRoleMentor();
    } catch (error) {
      toast.error(error.message || "Failed to create learning path");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      await completeTask(taskId);
      toast.success("Task completed!");
      loadRoleMentor();
    } catch (error) {
      toast.error(error.message || "Failed to complete task");
    }
  };

  const handleReset = async () => {
    try {
      await resetRoleMentor();
      toast.success("Learning path reset successfully!");
      setRoleMentor(null);
    } catch (error) {
      toast.error(error.message || "Failed to reset learning path");
    }
  };

  const handleDeleteCompletedPath = async (roleMentorId) => {
    try {
      await deleteCompletedRoleMentor(roleMentorId);
      toast.success("Completed path deleted successfully!");
      loadCompletedPaths(); // Reload the completed paths list
    } catch (error) {
      toast.error(error.message || "Failed to delete completed path");
    }
  };

  const calculateProgress = () => {
    if (!roleMentor) return 0;
    const totalTasks = roleMentor.tasks.length;
    const completedTasks = roleMentor.tasks.filter(task => task.isCompleted).length;
    return (completedTasks / totalTasks) * 100;
  };

  const isLearningPathCompleted = () => {
    if (!roleMentor) return false;
    return roleMentor.tasks.every(task => task.isCompleted);
  };

  return (
    <div className="px-10 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-6xl font-bold gradient-title">Role Mentor</h1>
        {roleMentor && (
          <Button variant="outline" onClick={handleReset}>
            Start New Path
          </Button>
        )}
      </div>

      {!roleMentor ? (
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Role</CardTitle>
            <CardDescription>
              Enter the role you want to learn, and we'll create a personalized learning path for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="e.g., Frontend Developer, Data Scientist, Product Manager"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Learning Path...
                  </>
                ) : (
                  "Create Learning Path"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Path: {roleMentor.role}</CardTitle>
              <CardDescription>
                Day {roleMentor.currentDay} of your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{Math.round(calculateProgress())}%</span>
                  </div>
                  <Progress value={calculateProgress()} className="h-2" />
                </div>
                
                {isLearningPathCompleted() ? (
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-green-700 dark:text-green-300 font-semibold">🎉 Congratulations!</h3>
                    <p className="text-green-600 dark:text-green-400 mt-1">
                      You have completed the learning path for {roleMentor.role}. You're now ready to take on this role!
                    </p>
                  </div>
                ) : (
                  roleMentor.tasks
                    .filter(task => task.day === roleMentor.currentDay)
                    .map((task) => (
                      <Card key={task.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <Checkbox
                              checked={task.isCompleted}
                              onCheckedChange={() => handleCompleteTask(task.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold">{task.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                )}
              </div>
            </CardContent>
          </Card>

          {completedPaths.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Completed Learning Paths</CardTitle>
                <CardDescription>
                  Your successfully completed role learning paths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedPaths.map((path) => (
                    <div
                      key={path.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card"
                    >
                      <div>
                        <h3 className="font-semibold">{path.role}</h3>
                        <p className="text-sm text-muted-foreground">
                          Completed on {new Date(path.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-green-600 dark:text-green-400">
                          ✓ Completed
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteCompletedPath(path.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}