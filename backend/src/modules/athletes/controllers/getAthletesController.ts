import { Request, Response } from "express";
import { GetAthletesService } from "../Services/getAthletes.service";

export class GetAthletesController {
    async getAthleteByNameTeamC(req: Request, res: Response): Promise<Response> {
        try {
            const { name_team } = req.body;
            const instanceService = new GetAthletesService();
            const athletes = await instanceService.getAthleteByNameTeam(name_team);
            return res.status(200).json({ athletes });
        } catch (error) {
            throw error;
        }
    }

    async getAthleteByIdC(req: Request, res: Response): Promise<Response>{
         try {
            const { id_athlete } = req.body;
            const instanceService = new GetAthletesService();
            const athlete = await instanceService.getAthleteById(id_athlete);
            return res.status(200).json({
                athlete
            })
         } catch (error) {
             return res.json({
                message: error
             });
         }
    }
}