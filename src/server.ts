/** @name Dependecies */
import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
/** @name Routes */
import { router } from "./routes";
/** @name JSON */
import swaggerFile from "./swagger.json";
/** @name Database */
import "./database";


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(router);

app.listen(3000, () => {
    console.log("Server is running on port 3000! 🚀");
});
