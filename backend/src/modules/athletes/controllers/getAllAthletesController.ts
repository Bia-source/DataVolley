import { Request, Response } from "express";
import { GetAllAthletesService } from "../Services/getAllAthletes.service";


export class GetAllAthletesController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name_team } = req.body;
            const instanceService = new GetAllAthletesService();
            const athletes = await instanceService.execute(name_team);
            return res.status(200).json({ athletes });
        } catch (error) {
            throw error;
        }
    }
}