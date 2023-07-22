import { prisma } from "../../../database/connect";
import { ICreateAthleteDTO } from "../DTO/ICreateAthletesDTO";
import { v4 as uuid } from "uuid";

type ICategory = {
  id_category: string;
}

export class CreateAthleteService {
   async execute({ team, category, name, number, position, height, age }: ICreateAthleteDTO) {
      try {
         const { id_category } = await prisma.category.findFirst({
            where: {
               classification: category
            },
            select: {
               id_category: true
            }
         }) as ICategory;
         
         if (!id_category) {
            throw Error("Nao existe essa categoria");
         }
         
         const athleteRepository = await prisma.athlete.create({
            data: {
               name,
               number,
               position,
               height,
               age,
               team,
               id_category_athlete: id_category
            }
         }
         );
         return { athleteRepository };
      } catch (error) {
        throw error;
      }
   }
}