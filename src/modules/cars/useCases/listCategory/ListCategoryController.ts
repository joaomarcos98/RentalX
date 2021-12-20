import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoryUseCase);

        const all = await listCategoriesUseCase.execute()

        return res.status(200).json(all);
    }
}

export { ListCategoryController };
