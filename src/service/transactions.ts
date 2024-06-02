import { cretaTransaction, getAllTransactions } from "../controller/transctions";
import { transactionSchema } from "../validation/transactions";
import { randomNum } from "../helpers/utils/randomNum";

export const CretaTransaction = async (transctions: any) => {
  try {
    let id_products: any = [];
    let qty: any = [];
    for (let i = 0; i < transctions.products.length; i++) {
      id_products.push(transctions.products[i].id_product);
      qty.push(transctions.products[i].qty);
    }
    const newTransction = {
      user_email: transctions.user_email,
      total_price: transctions.total_price,
      date: new Date().getDate(),
      order_number: randomNum(),
      trx: transctions.products,
    };

    const { success, transction } = await cretaTransaction(newTransction);
    if (success) {
      return {
        statusCode: 200,
        error: null,
        transction,
      };
    }
  } catch (error: any) {
    return {
      statusCode: 500,
      error: error,
      transction: null,
    };
  }
};

export const GetAllTransactions = async (username: string) => {
  if (username) {
    const { result } = await getAllTransactions(username);
    if (result) {
      return {
        statusCode: 200,
        result,
      };
    } else {
      return {
        statusCode: 500,
        result: null,
      };
    }
  }
};
