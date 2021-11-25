/**@name Dependecies */
import express from "express";
/**@name Routes */
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000! 🚀")
})
