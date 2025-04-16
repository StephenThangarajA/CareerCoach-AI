"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizAptitude from "./QuizAptitude";

export default function QuestionsPage() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");
  const subtopic = searchParams.get("subtopic");

  return (
    <div className="px-10">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/aptitude">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Aptitude Preparation
          </Button>
        </Link>
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-6xl font-bold gradient-title">
            {topic} - {subtopic}
          </h1>
        </div>
        <QuizAptitude subtopic={subtopic} />
      </div>
    </div>
  );
}