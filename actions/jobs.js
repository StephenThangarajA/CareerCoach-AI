"use server";

// Sample jobs data
const sampleJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore",
    salary: "₹25,00,000 - ₹35,00,000",
    description: "Looking for an experienced software engineer with strong skills in React, Node.js, and cloud technologies.",
    applyLink: "https://www.linkedin.com/jobs/view/senior-software-engineer-at-techcorp",
    industry: "tech-software-development",
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Hyderabad",
    salary: "₹12,00,000 - ₹18,00,000",
    description: "Join our data team to analyze and interpret complex data sets using SQL, Python, and visualization tools.",
    applyLink: "https://www.linkedin.com/jobs/view/data-analyst-at-analytics-pro",
    industry: "tech-data-science",
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() // 1 day ago
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Innovation Tech",
    location: "Mumbai",
    salary: "₹20,00,000 - ₹30,00,000",
    description: "Lead product development initiatives and work with cross-functional teams to deliver outstanding user experiences.",
    applyLink: "https://www.linkedin.com/jobs/view/product-manager-at-innovation-tech",
    industry: "tech-product-management",
    postedDate: new Date().toISOString() // Today
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Delhi",
    salary: "₹15,00,000 - ₹25,00,000",
    description: "Create responsive and interactive web applications using React, TypeScript, and modern CSS frameworks.",
    applyLink: "https://www.linkedin.com/jobs/view/frontend-developer-at-webtech",
    industry: "tech-software-development",
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
  },
  {
    id: "5",
    title: "Backend Developer",
    company: "ServerPro India",
    location: "Pune",
    salary: "₹18,00,000 - ₹28,00,000",
    description: "Develop scalable backend services using Node.js, Express, and PostgreSQL. Experience with AWS required.",
    applyLink: "https://www.linkedin.com/jobs/view/backend-developer-at-serverpro",
    industry: "tech-software-development",
    postedDate: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString() // 12 hours ago
  }
];

// Function to get active jobs
export async function getActiveJobs(industry = null) {
  try {
    console.log("Starting getActiveJobs function");
    
    let jobs = [...sampleJobs];

    // Filter by industry if specified
    if (industry) {
      jobs = jobs.filter(job => job.industry === industry);
    }

    // Sort by posted date
    jobs.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));

    console.log("Found jobs:", jobs);

    return jobs;
  } catch (error) {
    console.error("Error in getActiveJobs:", error);
    return []; // Return empty array instead of throwing error
  }
} 