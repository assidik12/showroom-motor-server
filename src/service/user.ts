import { hash, compare, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { createUser, findUserByEmail } from "../controller/user";
import { schemaRegisteer, schemaLogin } from "../validation/user";
import { reIssueAccessToken } from "../helpers/utils/jwt";

export const registerUser = async ({ username, email, address, handphone, role, password }: any) => {
  const hashing = await hash(password, await genSalt(10));
  let data = { username, email, address, handphone, role, password };
  const { error } = schemaRegisteer.validate(data);
  if (error) return { error, status: 400 };
  const { result, err, status } = await createUser(username, email, hashing, address, handphone, role);
  return { result, err, status };
};

export const loginUser = async (email: string, password: string) => {
  // validation
  const { error } = schemaLogin.validate({ email });

  if (error) return { err: error.message.toString(), status: 400, token: null };

  const { result, err, status } = await findUserByEmail(email);

  if (status === 200) {
    let pwd: any = result?.password;
    const validation = await compare(password, pwd);
    if (validation) {
      const { ...data } = result;
      const token = sign({ ...data }, process.env.JWT_PRIVATE_KEY as string, {
        expiresIn: "1h",
      });
      return { err, status, token };
    }
  } else {
    return { err, status, token: null };
  }
};

export const RefreshToken = async (token: string) => {
  try {
    const { accessToken } = await reIssueAccessToken(token);
    return {
      token: accessToken,
      status: 200,
      message: "refresh token",
    };
  } catch (err: any) {
    return {
      token: null,
      status: 400,
      message: "token is not valid",
    };
  }
};
