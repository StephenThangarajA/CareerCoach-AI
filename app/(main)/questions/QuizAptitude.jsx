"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import QuizResult from "./QuizResult";

export default function QuizAptitude({ subtopic }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const formattedSubtopic = subtopic.replace(/\s+|&/g, "");
        console.log("Formatted subtopic:", formattedSubtopic);

        const topicFolders = ["quantitativeaptitude", "logicalreasoning", "verbalability"];

        const imports = await Promise.allSettled(
          topicFolders.map((folder) =>
            import(`@/data/aptitude/${folder}/${formattedSubtopic}.js`).catch(() => null)
          )
        );

        const successfulImport = imports.find((result) => result.status === "fulfilled" && result.value);

        if (!successfulImport) {
          throw new Error(`Questions not found for subtopic: ${formattedSubtopic}`);
        }

        setQuestions(successfulImport.value.default);
        setAnswers(Array(successfulImport.value.default.length).fill(null));
      } catch (error) {
        console.error("Error loading questions:", error.message);
      }
    };

    loadQuestions();
  }, [subtopic]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
      setQuizCompleted(true);
    }
  };

  const calculateResult = () => {
    let correctCount = 0;
    let resultDetails = questions.map((q, index) => {
      const isCorrect = answers[index] === q.correctAnswer;
      if (isCorrect) correctCount++;

      return {
        question: q.question,
        userAnswer: answers[index] || "No Answer",
        answer: q.correctAnswer,
        explanation: q.explanation,
        isCorrect,
      };
    });

    const quizScore = (correctCount / questions.length) * 100;
    let improvementTip =
      quizScore < 60 ? "Review basic concepts for better understanding." : "Great job! Keep practicing.";

    setQuizResult({ quizScore, improvementTip, questions: resultDetails });
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setQuizCompleted(false);
    setQuizResult(null);
  };

  if (quizCompleted) {
    return (
      <div className="mx-2">
        <QuizResult result={quizResult} onStartNew={restartQuiz} />
      </div>
    );
  }

  if (questions.length === 0) {
    return <p className="text-center">Loading questions...</p>;
  }

  const question = questions[currentQuestion];

  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]} className="space-y-2">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleNext} disabled={!answers[currentQuestion]} className="ml-auto">
          {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
}
