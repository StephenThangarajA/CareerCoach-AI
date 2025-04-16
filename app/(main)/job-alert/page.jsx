"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getActiveJobs } from "@/actions/jobs";
import { useUser } from "@clerk/nextjs";

export default function JobAlertPage() {
  const [openJob, setOpenJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const userIndustry = user?.publicMetadata?.industry;
      const activeJobs = await getActiveJobs(userIndustry);
      setJobs(activeJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [user]);

  const toggleJob = (index) => {
    setOpenJob(openJob === index ? null : index);
  };

  const handleJobClick = (applyLink) => {
    window.open(applyLink, "_blank");
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Job Alert</h1>
        <Button onClick={fetchJobs} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh Jobs
        </Button>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Jobs that match your Industry
              </CardTitle>
              <CardDescription>
                Discover job opportunities in your preferred industry
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loading ? (
              <p className="text-muted-foreground">Loading jobs...</p>
            ) : jobs.length > 0 ? (
              jobs.map((job, index) => (
                <Card 
                  key={job.id || `${job.title}-${job.company}-${index}`} 
                  className="cursor-pointer hover:bg-muted/50 transition-colors" 
                  onClick={() => toggleJob(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex flex-row justify-between items-center">
                      {job.title} - {job.company}
                      {openJob === index ? <ChevronUp /> : <ChevronDown />}
                    </CardTitle>
                  </CardHeader>
                  {openJob === index && (
                    <CardContent className="space-y-2">
                      <p className="text-medium text-muted-foreground">
                        <strong>Location:</strong> {job.location}
                      </p>
                      {job.salary && (
                        <p className="text-medium text-muted-foreground">
                          <strong>Salary:</strong> {job.salary}
                        </p>
                      )}
                      <p className="text-medium text-muted-foreground">
                        <strong>Description:</strong> {job.description}
                      </p>
                      {job.deadline && (
                        <p className="text-medium text-muted-foreground">
                          <strong>Application Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}
                        </p>
                      )}
                      <Button onClick={() => handleJobClick(job.applyLink)}>
                        Apply
                      </Button>
                    </CardContent>
                  )}
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground">No active job listings found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}