/**@name DTO */
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
/**@name Entity */
import { User } from "../entities/User";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findByUsername(username: string): Promise<User>
}

export { IUsersRepository }
