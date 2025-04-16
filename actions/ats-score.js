"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateATSScore({ resume, jobDescription }) {
  if (!resume || !jobDescription) {
    throw new Error("Missing resume or job description.");
  }

  const prompt = `
    Analyze the given resume against the job description and provide an ATS score (0-100) indicating how well the resume matches the job requirements.
    
    Resume (Base64 Encoded PDF): ${resume}
    Job Description: ${jobDescription}

    ONLY return the response in the following JSON format without any additional text:
    {
      "score": number,
      "strengths": [string],
      "improvements": [string],
      "missingKeywords": [string]
    }
  `;

  try {
    const response = await model.generateContent(prompt);
    const textResponse = response.response.candidates[0].content.parts[0].text;
    const cleanedResponse = textResponse.replace(/```(?:json)?\n?/g, "").trim();
    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Error generating ATS score:", error);
    throw new Error("Failed to generate ATS score.");
  }
}