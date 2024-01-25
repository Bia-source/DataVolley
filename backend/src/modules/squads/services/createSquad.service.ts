import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";
import { ICreateSquadDTO } from "../DTO/ICreateSquadDTO";

export class CreateSquadService {
    async execute({classification, id_team, genre}: ICreateSquadDTO){
        try { 
            const squadRepository = await prisma.squads.create({
                data: {
                    id_team,
                    classification,
                    genre
                },
                select: {
                    athletes: true,
                    classification: true,
                    genre: true
                } 
            });

            return squadRepository;
        } catch (error) {
            throw error;
        }
    }
}