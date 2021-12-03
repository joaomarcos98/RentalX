/**@name Model */
import { Category } from "../../model/Category";
/**@name Repository */
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTACE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstace(): CategoriesRepository {
        if (!CategoriesRepository.INSTACE) {
            CategoriesRepository.INSTACE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTACE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);

    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export { CategoriesRepository };
