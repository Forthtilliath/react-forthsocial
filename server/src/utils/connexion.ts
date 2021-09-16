import { sign } from "jsonwebtoken";

export const getToken = (content: object) => {
  return sign(content, process.env.SECRET_TOKEN as string, {
    expiresIn: "4h",
  });
};

export const getCookieSettings = {
  httpOnly: true,
  maxAge: 4 * 60 * 60 * 1000,
}