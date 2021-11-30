/**@name Model */
import { Category } from "../model/Category";
/**@name Repository */
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {

    findByName(name: string): Category {
        console.log(name);
        return null;
    }

    list(): Category[] {
        console.log("list");
        return null;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
        return null;
    }
}

export { PostgresCategoriesRepository };
