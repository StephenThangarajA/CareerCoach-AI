import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScanSearch, ThumbsUp, TriangleAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ATSResult = ({ score, feedback }) => {
  return (
    <Card>
      <CardHeader className="text-2xl font-medium flex items-center justify-center pb-8">
        Analysis Result
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-row justify-between items-center my-6">
          <h2 className="text-2xl font-medium">ATS Score</h2>
          <h1 className="text-3xl font-medium text-primary gradient-title animate-gradient">
            {score !== null ? `${score}%` : "N/A"}
          </h1>
        </div>
        {feedback?.strengths && feedback.strengths.length > 0 && (
          <div className="mt-4">
          <div className="flex flex-row gap-x-2">
            <ThumbsUp />
            <h3 className="text-lg font-medium">
              Resume Strengths
            </h3>
          </div>
            <ul className="list-disc list-inside text-sm mt-2 text-green-500">
              {feedback.strengths.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {feedback?.improvements && feedback.improvements.length > 0 && (
          <div className="mt-6">
          <div className="flex flex-row gap-x-2">
            <TriangleAlert />
            <h3 className="text-lg font-medium">
              Areas of Improvement
            </h3>
          </div>
            <ul className="list-disc list-inside text-sm mt-2 text-red-500">
              {feedback.improvements.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {feedback?.missingKeywords && feedback.missingKeywords.length > 0 && (
          <div className="mt-6">
          <div className="flex flex-row gap-x-2">
            <ScanSearch />
            <h3 className="text-lg font-medium">
              Missing Keywords
            </h3>
          </div>
            <p className="text-sm mt-2">
              Your resume is missing these important keywords from the job description:
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {feedback.missingKeywords.map((keyword, index) => (
                <span key={index} className="px-2 py-1 text-xs border-2 border-gray-200 rounded-md">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ATSResult;