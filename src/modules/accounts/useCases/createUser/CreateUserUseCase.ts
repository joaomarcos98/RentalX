/**@name  Dependecies*/
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
/**@name  DTO*/
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
/**@name  Repository*/
import { IUsersRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../erros/AppError";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({
        name,
        email,
        password,
        driver_license
    }: ICreateUserDTO): Promise<void> {

        const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userEmailAlreadyExists) {
            throw new AppError("User Already Exists")
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        });
    }
}

export { CreateUserUseCase };
