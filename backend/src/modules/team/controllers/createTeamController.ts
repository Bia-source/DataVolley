import { Request, Response } from "express";
import { CreateTeamService } from "../services/createTeam.service";


export class CreateTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, id_adm } = req.body;
            const instanceService = new CreateTeamService();
            const team = await instanceService.execute({ name, id_adm });
            return res.status(201).json({ team });
        } catch (error) {
            return res.json({
                error
            })
        }

    }
}