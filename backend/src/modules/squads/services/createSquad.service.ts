import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";
import { ICreateSquadDTO } from "../DTO/ICreateSquadDTO";

export class CreateSquadService {
    async execute({id_category, id_team, genre}: ICreateSquadDTO){
        try { 
            const categorySquadAlreadyExist = await prisma.category.findFirst({
                where: {
                    id_category,
                    id_team,
                    genre
                }
            });

            if(categorySquadAlreadyExist){
                throw new AppError(MESSAGE_ERROR.SQUAD_CATEGORY_EXISTS)
            }

            const squadRepository = await prisma.squads.create({
                data: {
                    id_team,
                    id_category,
                    genre
                },
                select: {
                    athletes: true,
                    category: true,
                    genre: true
                } 
            });

            return squadRepository;
        } catch (error) {
            throw error;
        }
    }
}