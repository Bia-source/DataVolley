import { Request, Response } from "express";
import { CreateAthleteService } from "../Services/createAthlete.service";

export class CreateAthleteController {
    async handle(req: Request, res: Response): Promise<any>{
      try {
        const { name, age, height, position, number, team } = req.body;
        const instanceService = new CreateAthleteService();
        const newAthlete = await instanceService.execute({name, number, position, height, age, team});
        return res.status(201).json({ novoAtleta: newAthlete });
      } catch (error) {
        throw error;
      }
    }
}