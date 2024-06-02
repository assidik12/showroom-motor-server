import express, { IRouter, Request, Response } from "express";
import { registerUser, loginUser, RefreshToken } from "../service/user";
import { deserialize } from "../middlewares/deseralize";

const userRouter: IRouter = express.Router();
userRouter.post("/register", async (req: Request, res: Response) => {
  const { username, email, password, address, handphone } = req.body;
  const data = { username, email, password, address, handphone, role: "user" };
  const { status, err, error, result } = await registerUser(data);
  if (status === 200) {
    res.status(status).send(result);
  } else if (status === 403 || status === 500) {
    res.status(status).send({ err, result: null });
  } else {
    res.status(status).send({ error, result: null });
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { status, err, token }: any = await loginUser(email, password);
  if (status === 200) {
    res.status(status).send({ message: "login success", token });
  } else if (status === 403 || status === 500) {
    res.status(status).send({ message: err, token });
  } else {
    res.status(status).send({ message: err, token });
  }
});

userRouter.post("/refreshToken", deserialize, async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  console.log(refreshToken);
  const { token, status, message }: any = await RefreshToken(refreshToken);
  if (status === 200) {
    res.status(200).send({ message, token });
  } else {
    res.status(403).send({ message, token });
  }
});

export default userRouter;
