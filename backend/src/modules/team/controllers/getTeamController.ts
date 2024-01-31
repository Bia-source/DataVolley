import { Request, Response } from "express";
import { GetTeamService } from "../services/getTeam.service";


export class GetTeamController{
    async getAllTeamsC(req: Request, res: Response): Promise<Response>{
        const instanceService = new GetTeamService();
        const teams = await instanceService.getAllTeams();
        return res.json({ teams });
    }

    async getTeamByNameC(req: Request, res: Response): Promise<Response>{
        const { name } = req.body;
        const instanceService = new GetTeamService();
        const team = await instanceService.getTeamByName(name);
        return res.json({ team });
    }

    async getTeamByIdC(req: Request, res: Response): Promise<Response>{
        const { id_team } = req.body;
        const instanceService = new GetTeamService();
        const team = await instanceService.getTeamById(id_team);
        return res.json({ team });
    }

}