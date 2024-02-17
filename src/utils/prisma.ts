import { PrismaClient } from "@prisma/client";

// export main prisma client
export const prisma = new PrismaClient();

// export individual models
export const Patient = prisma.patient;
export const User = prisma.user;
export const Doctor = prisma.doctor;
