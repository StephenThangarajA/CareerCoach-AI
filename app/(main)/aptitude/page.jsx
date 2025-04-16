"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import {topics} from "@/data/topics";

export default function AptitudePage() {
  const [openTopic, setOpenTopic] = useState(null);
  const router = useRouter();

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  const handleSubTopicClick = (topic, subTopic) => {
    router.push(`/questions?topic=${encodeURIComponent(topic)}&subtopic=${encodeURIComponent(subTopic)}`);
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Aptitude Preparation</h1>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Topics
              </CardTitle>
              <CardDescription>
                Choose the topic you want to prepare
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => toggleTopic(index)} >
                <CardHeader>
                  <CardTitle className="text-xl flex flex-row justify-between items-center">
                    {topic.title}
                    {openTopic === index ? <ChevronUp /> : <ChevronDown />}
                  </CardTitle>
                </CardHeader>
                {openTopic === index && (
                  <CardContent className="space-y-2">
                    {topic.subTopics.map((subTopic, subIndex) => (
                      <p key={subIndex} className="text-medium text-muted-foreground hover:text-primary transition-colors duration-200" onClick={() => handleSubTopicClick(topic.title, subTopic)}>{subTopic}</p>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}