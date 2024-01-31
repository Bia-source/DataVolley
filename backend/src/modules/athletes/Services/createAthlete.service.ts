import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";
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
            throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_DONT_EXISTS);
         }

         const athleteAlreadyExist = await prisma.athlete.findFirst({
            where: {
               name: name.toLocaleLowerCase(),
               id_category_athlete: id_category
            }
         });

         if (athleteAlreadyExist) {
            throw new AppError(MESSAGE_ERROR.VALIDATE_ATHLETE_EXISTS);
         }

         const categoryS = await prisma.category.findFirst({
            where: {
               classification: category,
               genre
            }
         })

         if (!categoryS) {
            throw new AppError(MESSAGE_ERROR.VALIDATE_ATHLETE_EXISTS);
         }

         const athleteRepository = await prisma.athlete.create({
            data: {
               name: name.toLocaleLowerCase(),
               number,
               age,
               position,
               height,
               id_team: team,
               id_category_athlete: id_category,
               categories: {
                  connect: {
                     id_category
                  }
               }
            }
         });

         await prisma.category.update({
            where: {
               id_category: id_category

            },
            data: {
               id_athletes: {
                  push: athleteRepository.id_athlete
               }
            }
         });

         return athleteRepository;
      } catch (error) {
         throw error;
      }
   }
}