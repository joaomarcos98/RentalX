/**@name Dependecies */
import { Router } from "express";
/**@name Repository */
import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    if (name && description) {

        const categoryAlreadyExists = categoriesRepository.findByName(name)

        if (categoryAlreadyExists){
            return res.status(400).json({ error: "Category already exists." });
        }

        categoriesRepository.create({ name, description });

        return res.status(201).send();
    }

    return res.status(400).json({ error: "missing description or name." });
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list()

    return res.status(200).json(all)
})
export { categoriesRoutes };
