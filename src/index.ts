import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user";
import productRouter from "./routers/products";
import bodyParser from "body-parser";
// import deserialize from "./middlewares/deseralize";
dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();
// app.use(deserialize);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", productRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
