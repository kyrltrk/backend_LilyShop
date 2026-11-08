import { Response } from "express";
import jwt from "jsonwebtoken";

//Ese hijuelaverga q aparece cada 6 meses a joder la vida
const generateToken = (
  res: Response,
  userId: any
  // Types.ObjectId
) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
  });
};

export default generateToken;
