/** @name Dependecies */
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
/** @name Routes */
import { router } from "./routes";
/** @name JSON */
import swaggerFile from "./swagger.json";
/** @name Database */
import "./database";
/**@name Container */
import "./shared/container"
/**@name Error */
import { AppError } from "./erros/AppError";


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000! 🚀");
});
