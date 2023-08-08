import { prisma } from "../../../database/connect";
import { ICreateAthleteDTO } from "../DTO/ICreateAthletesDTO";
import { IReturnCreateAthlete } from "../DTO/IReturnAthletesDTO";

type ICategory = {
  id_category: string;
}

export class CreateAthleteService {
   async execute({ team, category, name, number, position, height, age, genre }: ICreateAthleteDTO): Promise<IReturnCreateAthlete> {
      try {
         const { id_category } = await prisma.category.findFirst({
            where: {
               classification: category,
               genre
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
         return athleteRepository ;
      } catch (error) {
        throw error;
      }
   }
}