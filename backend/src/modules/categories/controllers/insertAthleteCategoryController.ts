import { Request, Response } from "express";
import { InsertAthleteCategoryService } from "../services/insertAthleteInCategory.service";

export class InsertAthleteCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { classification, genre, id_athlete, id_team } = req.body;
            const instanceSerice = new InsertAthleteCategoryService();
            const update = await instanceSerice.execute({ classification, genre, id_athlete, id_team });
            return res.json({ update });
        } catch (error) {
            return res.json({ error });
        }
    }
}