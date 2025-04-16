"use client";

import React, { useState } from "react";
import FileUpload from "./_components/file-upload";
import ATSResult from "./_components/ats-result";

export default function ATSScorePage() {
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState({
    strengths: [],
    improvements: [],
    missingKeywords: [],
  });

  return (
    <div className="px-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">ATS Score</h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-20">
        <div className="w-1/2">
          <FileUpload setScore={setScore} setFeedback={setFeedback} />
        </div>
        <div className="w-1/2">
          <ATSResult score={score} feedback={feedback} />
        </div>
      </div>
    </div>
  );
}