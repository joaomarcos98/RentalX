/**@name Dependecies */
import { Router } from "express";
/**@name Repository */
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
})

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res)
})
export { categoriesRoutes };
