import { auth } from "@clerk/nextjs";

export async function GET(req) {
  const user = auth();
  console.log("Auth check:", user);

  if (!user || !user.userId) {
    return Response.json({ error: "User not authenticated" }, { status: 401 });
  }

  return Response.json({ message: "User authenticated", userId: user.userId });
} 