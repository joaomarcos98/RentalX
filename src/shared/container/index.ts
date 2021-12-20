import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

import { CategoriesRepository } from "../../modules/cars/repositories/implementation/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementation/SpecificationRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);



