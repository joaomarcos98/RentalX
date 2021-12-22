import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing!")
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub : user_id} = verify(token, "b839f46722441b0cbcfc5d69326b81c3") as IPayLoad;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if(!user){
            throw new Error("User doesn't exists!")
        }

        next()
    }
    catch {
        throw new Error("Invalid token!")
    }
}