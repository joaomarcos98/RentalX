import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../erros/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401)
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "b839f46722441b0cbcfc5d69326b81c3") as IPayLoad;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User doesn't exists!", 401)
        }

        req.user = {
            id: user_id
        }

        next()
    }
    catch {
        throw new AppError("Invalid token!", 401)
    }
}