import { sign, verify } from "jsonwebtoken";
import { findUserByEmail } from "../../controller/user";

export const verifyToken = async (token: string) => {
  try {
    const decoded = await verify(token, process.env.JWT_PRIVATE_KEY as string);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, err };
  }
};

export const reIssueAccessToken = async (refreshToken: string) => {
  try {
    const { decoded, err, valid }: any = await verifyToken(refreshToken);
    const { result } = await findUserByEmail(decoded.email as string);

    const accessToken = await sign({ result }, process.env.JWT_PRIVATE_KEY as string, {
      expiresIn: "30d",
    });

    return { accessToken, valid: true };
  } catch (err) {
    return { accessToken: null, valid: false };
  }
};
