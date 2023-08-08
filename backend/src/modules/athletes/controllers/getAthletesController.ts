import { Request, Response } from "express";
import { GetAthletesService } from "../Services/getAthletes.service";

export class GetAthletesController {
    async getAthleteByNameTeamC(req: Request, res: Response): Promise<Response> {
        try {
            const { name_team } = req.body;
            const instanceService = new GetAthletesService();
            const athletes = await instanceService.getAthleteByNameTeamS(name_team);
            return res.status(200).json({ athletes });
        } catch (error) {
            throw error;
        }
    }

    async getAthleteByIdC(req: Request, res: Response): Promise<Response> {
        try {
            const { id_athlete } = req.body;
            const instanceService = new GetAthletesService();
            const athlete = await instanceService.getAthleteByIdS(id_athlete);
            return res.status(200).json({
                athlete
            })
        } catch (error) {
            return res.json({
                 error
            });
        }
    }

    async getAthleteByNameC(req: Request, res: Response): Promise<Response> {
        try {
            const { name_athlete } = req.body;
            const instanceService = new GetAthletesService();
            const athlete = await instanceService.getAthleteByNameS(name_athlete);
            return res.status(200).json({
                athlete
            });
        } catch (error) {
            return res.json({
                 error
             });
        }
    }

    async getAthletesByCategoryIdC(req: Request, res: Response): Promise<Response>{
      try {
         const { id_category, genre } = req.body;
         const instanceService = new GetAthletesService();
         const athletes = await instanceService.getAthletesByCategoryIdS(id_category, genre);
         return res.status(200).json({
            athletes
         });
      } catch (error) {
        console.log(error);
        return res.json({
             error
        });
      }
    }
}