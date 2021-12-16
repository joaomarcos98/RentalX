import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = null;
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
