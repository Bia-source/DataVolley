import { prisma } from "../../../database/connect";
import { ICreateAthleteDTO } from "../DTO/ICreateAthletesDTO";
import { v4 as uuid } from "uuid";

export class CreateAthleteService {
    async execute({ team, name, number, position,height, age }: ICreateAthleteDTO){
       try {
         const athleterepository = await prisma.athlete.create({
            data: {
                name,
                number,
                position,
                height,
                age,
                team
            }
         });
         console.log(athleterepository);
         return { athleterepository };
       } catch (error) {
          console.log(error);
       }
    }
}