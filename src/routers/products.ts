import express, { IRouter, Request, Response } from "express";
import { getProduct, addProduct, updateProduct, deleteProduct, getProductByid } from "../service/product";
import { deserialize } from "../middlewares/deseralize";

const productRouter: IRouter = express.Router();

productRouter.get("/product", async (req: Request, res: Response) => {
  const { products, statusCode } = await getProduct();
  if (statusCode === 200) {
    res.status(statusCode).send({ products, message: "product fatched" });
  } else {
    res.status(statusCode).send({ message: "product not fatched" });
  }
});
productRouter.get("/product/:id", async (req: Request, res: Response) => {
  const { product, statusCode } = await getProductByid(req.params.id);
  if (statusCode !== 200 || product === null) {
    res.status(statusCode).send({ message: "product not fatched" });
  } else if (statusCode === 200) {
    res.status(statusCode).send({ product, message: "product fatched" });
  }
});

productRouter.post("/product", deserialize, async (req: Request, res: Response) => {
  const { error, product, statusCode } = await addProduct(req.body);
  if (statusCode === 500 || statusCode === 400) {
    res.status(statusCode).send({ message: error, product });
  } else {
    res.status(statusCode).send({ message: "product added", product });
  }
});

productRouter.put("/product/:id", deserialize, async (req: Request, res: Response) => {
  const { message, product, statusCode } = await updateProduct(req.params.id, req.body);
  if (statusCode === 500 || statusCode === 404) {
    res.status(statusCode).send({ message, product });
  } else {
    res.status(statusCode).send({ message, product });
  }
});
productRouter.delete("/product/:id", deserialize, async (req: Request, res: Response) => {
  const { message, product, statusCode } = await deleteProduct(req.params.id);
  if (statusCode === 500 || statusCode === 404) {
    res.status(statusCode).send({ message, product });
  } else {
    res.status(statusCode).send({ message, product });
  }
});

export default productRouter;
