import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUserRepository";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new Error("User or password invalid.")
        }

        const passworMatch = await compare(password, user.password);

        if (!passworMatch) {
            throw new Error("User or password invalid.")
        }

        const token = sign({}, "b839f46722441b0cbcfc5d69326b81c3", {
            subject: user.id,
            expiresIn: "1d"
        });

        const userToken: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };

        return userToken;
    }
}

export { AuthenticateUserUseCase };
