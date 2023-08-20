import { Athlete, CATEGORIES, GENRE } from "@prisma/client"
import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";

type IRequestInsertAthleteCategory = {
    classification: CATEGORIES;
    genre: GENRE;
    id_athlete: string;
    id_team: string;
}

type ITypeCategory = {
    id_category: string;
    athletes: Athlete[];
}

export class InsertAthleteCategoryService {
    async execute({ classification, genre, id_athlete, id_team }: IRequestInsertAthleteCategory) {
        try {
            
            const athlete = await prisma.athlete.findFirst({
                where: {
                    id_athlete
                }
            });
 
            if(!athlete){
                throw new AppError("Atleta nao encontrado");
            }

            const { id_category, athletes } = await prisma.category.findFirst({
                where: {
                    id_team,
                    classification,
                    genre
                }, 
                select: {
                    id_category: true,
                    athletes: true
                }
            }) as ITypeCategory;

            if(athletes.find((res)=> res.id_athlete === id_athlete)){
                throw new AppError("Este atleta já foi cadastrado nessa categoria!");
            }

            if(!id_category){
                throw new AppError("Categoria nao encontrado");
            }

            const listAthlete = await prisma.category.update({
                where: {
                        id_category: id_category
                        
                },
                data: {
                   athletes: {
                    set: [
                        ...athletes,
                        athlete
                     ]
                   },
                   id_athletes: {
                    push: athlete.id_athlete
                   }
                }
            })
             return listAthlete;
        } catch (error) {
              throw error;
        }
    }
}

