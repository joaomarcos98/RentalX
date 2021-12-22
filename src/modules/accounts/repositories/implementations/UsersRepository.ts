import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            password,
            email,
            driver_license
        });

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({ email });

        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = this.repository.findOne({ username });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.repository.findOne(id);

        return user;
    }

}

export { UsersRepository };
