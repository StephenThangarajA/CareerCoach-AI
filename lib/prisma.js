import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'error', 'warn'],
  });
};

const db = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

// Debug logging
if (process.env.NODE_ENV === "development") {
  console.log("Prisma Client initialized:", !!db);
  console.log("Database URL:", process.env.DATABASE_URL ? "Set" : "Not set");
}

export { db };