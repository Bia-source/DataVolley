import { Request, Response } from "express";
import { CreateAthleteService } from "../Services/createAthlete.service";

export class CreateAthleteController {
    async handle(req: Request, res: Response): Promise<Response>{
      try {
        const { name, age, height, position, number, team, category, genre } = req.body;
        const instanceService = new CreateAthleteService();
        const newAthlete = await instanceService.execute({team, category, name, number, position,height, age, genre});
        return res.status(201).json({ novoAtleta: newAthlete });
      } catch (error) {
        throw error;
      }
    }
}