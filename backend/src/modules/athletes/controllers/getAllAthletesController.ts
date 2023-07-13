import { Request, Response } from "express";
import { GetAllAthletesService } from "../Services/getAllAthletes.service";


export class GetAllAthletesController {
    async handle(req: Request, res: Response): Promise<any> {
        try {
            const instanceService = new GetAllAthletesService();
            const athletes = await instanceService.execute();
            return res.status(200).json({ athletes });
        } catch (error) {
            throw error;
        }
    }
}