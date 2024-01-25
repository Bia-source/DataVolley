import { Request, Response } from "express";
import { CreateSquadService } from "../services/createSquad.service";

export class CreateSquadController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { classification, id_team, genre } = req.body;
            const instanceService = new CreateSquadService();
            const squad = await instanceService.execute({classification, id_team, genre});
            return res.status(201).json({ squad });
        } catch (error) {
            return res.json({ error })
        }
    }
}
