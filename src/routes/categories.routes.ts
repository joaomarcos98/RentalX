/**@name Dependecies */
import { Router } from "express";
/**@name Model */
import { Category } from "../model/Category";


const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    if (name && description) {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        categories.push(category);
        return res.status(201).json({ category })
    }

    return res.status(400).json({ error: "missing description or name" })
})



export { categoriesRoutes };
