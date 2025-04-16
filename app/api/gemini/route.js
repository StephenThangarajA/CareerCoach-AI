import { generateATSScore } from "@/actions/ats-score";

export async function POST(req) {
  try {
    const { resume, jobDescription } = await req.json();

    if (!resume || !jobDescription) {
      return new Response(
        JSON.stringify({ error: "Resume and Job Description are required." }),
        { status: 400 }
      );
    }

    const result = await generateATSScore({ resume, jobDescription });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}