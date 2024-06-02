import express, { IRouter, Request, Response } from "express";
import { CretaTransaction, GetAllTransactions } from "../service/transactions";
import { deserialize } from "../middlewares/deseralize";

const transactionRouter: IRouter = express.Router();

transactionRouter.get("/transactions", deserialize, async (req: Request, res: Response) => {
  const { result, statusCode }: any = await GetAllTransactions(req.body.user_email);
  if (statusCode === 500 || statusCode === 400) {
    res.status(statusCode).send({ message: "error", result });
  } else {
    res.status(statusCode).send({ message: "transaction success fatched", result });
  }
});

transactionRouter.post("/transactions", deserialize, async (req: Request, res: Response) => {
  const { statusCode, transaction }: any = await CretaTransaction(req.body);
  if (statusCode === 500 || statusCode === 400) {
    res.status(statusCode).send({ message: "error", transaction });
  } else {
    res.status(statusCode).send({ message: "transaction added", transaction });
  }
});

export default transactionRouter;
