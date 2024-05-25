import { Prisma, PrismaClient } from "@prisma/client";

export type createTypeProduct = Prisma.ProductCreateInput;

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return {
      success: true,
      products,
    };
  } catch (error) {
    return {
      success: false,
      products: error,
    };
  }
};

export const GetProductById = async (paramsId: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(paramsId),
      },
    });
    return {
      success: true,
      product,
    };
  } catch (error) {
    return {
      success: false,
      product: error,
    };
  }
};

export const createProduct = async (product: Prisma.ProductCreateInput) => {
  try {
    const newProduct = await prisma.product.create({
      data: product,
    });
    return {
      success: true,
      product: newProduct,
    };
  } catch (error) {
    return {
      success: false,
      product: error,
    };
  }
};

export const UpdateProduct = async (paramsId: string, value: any) => {
  try {
    const newProduct = await prisma.product.update({
      where: {
        id: parseInt(paramsId),
      },
      data: value,
    });
    return {
      statusCode: 200,
      product: newProduct,
    };
  } catch (error: any) {
    if (error.code === "P2025") {
      return {
        statusCode: 404,
        message: "Product not found",
      };
    } else {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
};
export const DeleteProduct = async (paramsId: string) => {
  try {
    const newProduct = await prisma.product.delete({
      where: {
        id: parseInt(paramsId),
      },
    });
    return {
      statusCode: 200,
      product: newProduct,
    };
  } catch (error: any) {
    if (error.code === "P2025") {
      return {
        statusCode: 404,
        message: "Product not found",
      };
    } else {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
};
