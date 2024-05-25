import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string, hashing: string, address: string, handphone: string, role: string) => {
  try {
    const result = await prisma.user.create({
      data: {
        email,
        address,
        handphone,
        password: hashing,
        role,
        username,
      },
    });

    return {
      result,
      status: 200,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      // Kondisi ketika email sudah ada
      return {
        err: "Email already exists",
        status: 403,
      };
    } else {
      // Kondisi ketika database mati
      return {
        err: "Database connection error",
        status: 500,
      };
    }
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!result) {
      // Kondisi ketika email tidak ada
      return {
        err: "Email not found",
        status: 403,
        result: null,
      };
    } else {
      return {
        result,
        status: 200,
        err: null,
      };
    }
  } catch (error: Error | any) {
    // Kondisi ketika database mati
    return {
      err: "Database connection error",
      status: 500,
      result: null,
    };
  }
};
