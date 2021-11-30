import { Specification } from "../model/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";
import { ISpecificationRepository } from "./ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    findByName(name: string) {
        const specification = this.specifications.find(spec => spec.name === name)
        return specification
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });
        this.specifications.push(specification);
    }
}

export { SpecificationRepository };
