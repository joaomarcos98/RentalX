/**@name Dependecies */
import { Router } from "express";
/**@name Repository */
import { CategoriesRepository } from "../repositories/categoriesRepository";
/**@name Service */
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description })

    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list()

    return res.status(200).json(all)
})
export { categoriesRoutes };
