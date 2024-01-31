import { Request, Response } from "express";
import { GetTeamService } from "../services/getTeam.service";


export class GetTeamController {
    async getAllTeamsC(req: Request, res: Response): Promise<Response> {
        try {
            const instanceService = new GetTeamService();
            const teams = await instanceService.getAllTeams();
            return res.json({ teams });
        } catch (error) {
            return res.json({ message: error })
        }
    }

    async getTeamByNameC(req: Request, res: Response): Promise<Response> {
        try {
            const { name } = req.body;
            const instanceService = new GetTeamService();
            const team = await instanceService.getTeamByName(name);
            console.log("taem-> ", team)
            return res.json({ team });
        } catch (error) {
            return res.json({ message: error })
        }
    }

    async getTeamByIdC(req: Request, res: Response): Promise<Response> {
        try {
            const { id_team } = req.body;
            const instanceService = new GetTeamService();
            const team = await instanceService.getTeamById(id_team);
            return res.json({ team });
        } catch (error) {
            return res.json({ message: error })
        }
    }

}