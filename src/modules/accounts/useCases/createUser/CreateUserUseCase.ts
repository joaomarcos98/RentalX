/**@name  Dependecies*/
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
/**@name  DTO*/
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
/**@name  Repository*/
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({
        name,
        username,
        email,
        password,
        driver_license
    }: ICreateUserDTO): Promise<void> {

        const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);
        const userUsernameAlreadyExists = await this.usersRepository.findByUsername(username);

        if (userEmailAlreadyExists || userUsernameAlreadyExists) {
            throw new Error("User Already Exists")
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name,
            username,
            email,
            password: passwordHash,
            driver_license
        });
    }
}

export { CreateUserUseCase };
