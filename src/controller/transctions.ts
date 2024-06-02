import { Prisma, PrismaClient } from "@prisma/client";

export type Transction = Prisma.TransactionsCreateInput;
export type transactionsDetailst = Prisma.Transactions_detailCreateInput;

const prisma = new PrismaClient();

export const cretaTransaction = async (transction: any) => {
  const { user_email, date, trx, order_number, total_price } = transction;
  try {
    // Start a transaction
    const transaction = await prisma.$transaction(async (tx) => {
      // 1. Find the user
      const user = await tx.user.findUnique({
        where: { email: user_email },
      });

      if (!user) {
        throw new Error("User not found");
      }

      // 3. Create transaction details
      const transactionDetails = await tx.transactions_detail.create({
        data: {
          no_order: order_number,
          user: {
            connect: {
              email: user.email,
            },
          },
          total_price,
        } as any,
      });
      // 4. Create transactions for each product
      const transactionsData = trx.map((item: any) => ({
        id_products: item.id_product,
        qty: item.qty,
        order_number,
      }));
      await tx.transactions.createMany({ data: transactionsData });

      return { transactionDetails, transactionsData }; // Return created data for potential further processing
    });

    // 5. (Optional) Update product stock if applicable
    // Add logic here to update product stock based on purchased quantity (transactions.map)

    for (let i = 0; i < transaction.transactionsData.length; i++) {
      await updateStock(transaction.transactionsData[i].id_products, transaction.transactionsData[i].qty);
    }

    return {
      success: true,
      transction: transaction,
    };
  } catch (error: Error | any) {
    return {
      success: false,
      transction: error[0].message,
    };
  }
};

export const getAllTransactions = async (username: string) => {
  try {
    const result = await prisma.transactions_detail.findMany({
      where: {
        user_email: username,
      },
      select: {
        no_order: true,
        date: true,
        total_price: true,
        transactions: {
          select: {
            id_products: true,
            qty: true,
          },
        },
      },
    });
    return {
      result,
    };
  } catch (error) {
    return {
      result: null,
    };
  }
};
// function internal untuk update stok

const updateStock = async (id: number, stok: number) => {
  const product = await prisma.product.findMany({
    where: {
      id,
    },
  });
  if (product) {
    const res = await prisma.product.update({
      where: {
        id,
      },
      data: {
        stok: {
          decrement: stok,
        },
      },
    });
    return res;
  }
};
