import { sign, verify } from "jsonwebtoken";
import { findUserByEmail } from "../../controller/user";

export const verifyToken = async (token: string) => {
  try {
    const decoded = await verify(token, process.env.JWT_PUBLIC_KEY as string);
    console.log("decoded", decoded);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false };
  }
};

export const reIssueAccessToken = async (refreshToken: string) => {
  try {
    const { decoded }: any = await verifyToken(refreshToken);
    const { result } = await findUserByEmail(decoded.email as string);

    const accessToken = sign({ result }, process.env.JWT_PRIVATE_KEY as string, {
      expiresIn: "30d",
      algorithm: "RS256",
    });

    return { accessToken, valid: true };
  } catch {
    return { accessToken: null, valid: false };
  }
};
