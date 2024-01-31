import { Request, Response } from "express";
import { GetSquadService } from "../services/getSquad.service";


export class GetSquadController{
    async getAllSquadsC(req: Request, res: Response): Promise<Response>{
        const instanceService = new GetSquadService();
        const squads = await instanceService.getAllSquads();
        return res.json({ squads });
    }

    async getSquadByCategoryC(req: Request, res: Response): Promise<Response>{
        const { id_category} = req.body;
        const instanceService = new GetSquadService();
        const squads = await instanceService.getSquadsByCategory(id_category);
        return res.json({ squads });
    }
}