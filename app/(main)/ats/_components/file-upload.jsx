"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Upload, StarsIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FileUpload = ({ setScore, setFeedback }) => { 
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleGenerateScore = async () => {
    if (!file || !jobDescription.trim()) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const resumeBase64 = reader.result.split(",")[1];

      try {
        const response = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resume: resumeBase64, jobDescription }),
        });

        const data = await response.json();
        setLoading(false);

        if (data.score) {
          setScore(data.score);
          setFeedback({
            strengths: data.strengths || [],
            improvements: data.improvements || [],
            missingKeywords: data.missingKeywords || [],
          });
        } else {
          alert("Failed to fetch ATS score.");
        }
      } catch (error) {
        console.error("Error fetching ATS score:", error);
        alert("An error occurred while processing your request.");
        setLoading(false);
      }
    };
  };

  return (
    <Card>
      <CardHeader className="text-2xl font-medium text-center pb-4">
        ATS Scanner
      </CardHeader>
      <Separator />
      <CardContent>
        <label className="block my-6 text-sm font-medium">Upload Resume</label>
        <div className="max-w-md mx-auto rounded-lg overflow-hidden">
          <div className="relative h-48 rounded-lg border-2 border-dotted hover:border-primary transition-colors flex justify-center items-center">
            <div className="absolute flex flex-col items-center">
              <Upload className="h-12 w-12 text-muted-foreground mb-4" />
              <span className="block font-semibold">Drag & drop your Resume here</span>
              <span className="block text-muted-foreground mt-1">or click to upload</span>
            </div>
            <input accept="application/pdf" className="h-full w-full opacity-0 cursor-pointer" type="file" onChange={handleFileChange} />
          </div>
          {file && <p className="mt-3 text-sm text-center text-primary">{file.name}</p>}
        </div>
        <div className="py-6">
          <label className="block my-6 text-sm font-medium">Job Description</label>
          <Textarea rows="4" placeholder="Enter the Job Description" className="w-full border-2 rounded-lg px-4 py-2 text-sm" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        </div>
        <div className="flex items-center justify-center">
          <Button className="flex items-center gap-2" onClick={handleGenerateScore} disabled={loading}>
            <StarsIcon className="h-4 w-4" />
            {loading ? "Processing..." : "Generate Score"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUpload;