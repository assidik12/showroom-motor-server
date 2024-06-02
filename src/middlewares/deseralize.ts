import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/utils/jwt";

export const deserialize = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken: any = req.headers.authorization?.replace("Bearer ", "");

  if (!accessToken) {
    next();
  }

  const { decoded, valid, err }: any = await verifyToken(accessToken);

  if (!decoded) {
    return res.status(401).send({ message: "Anda belum login" });
  }

  if (decoded.role !== "admin") {
    res.locals.user = decoded;
    return next();
  } else if (decoded.role === "admin") {
    res.locals.admin = decoded;
    return next();
  } else {
    res.status(403).send({ message: "anda tidak memiliki akses" });
  }
};
