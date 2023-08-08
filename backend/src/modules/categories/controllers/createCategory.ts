import { Request, Response } from "express";
import { CreateCategoryService } from "../services/createCategory.service";


export class CreateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { classification, id_team, genre } = req.body;
            const instanceService = new CreateCategoryService();
            const category = await instanceService.execute({ classification, id_team, genre });
            return res.status(201).json({ category });
        } catch (error) {
            return res.json({
                error
            });
        }
    }
}