import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

interface DecodedToken extends jwt.JwtPayload {
  userId: string;
}

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET as string
        ) as DecodedToken;

        req.user = (await User.findById(decoded.userId).select(
          "-password"
        )) as IUser;

        if (!req.user) {
          res.status(401);
          throw new Error(
            "No autorizado, usuario no encontrado o ya no existe"
          );
        }

        next();
      } catch (error) {
        res.status(401);
        throw new Error("No autorizado, token inválido o expirado");
      }
    } else {
      res.status(401);
      throw new Error("No autorizado, token no encontrado");
    }
  }
);

const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403);
    throw new Error("No autorizado, se requiere privilegios de administrador");
  }

  next();
};

export { admin, protect };
