import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";
import { ICreateTeamDTO, IReturnCreateTeam } from "../DTO/ICreateTeamDTO";

export class CreateTeamService {
    async execute({name, id_adm}: ICreateTeamDTO): Promise<any>{
        try {
            const alreadyNameExist = await prisma.team.findFirst({
                where: {
                    name
                }
            });
    
            if(alreadyNameExist){
                throw new AppError(MESSAGE_ERROR.VALIDATE_NAME_TEAM_EXISTS);
            }
    
            const team = await prisma.team.create({
                data: {
                    name: name.toLocaleLowerCase(),
                    id_adm
                },
                select: {
                    id_team: true,
                    name: true,
                    id_adm: true,
                    games: true,
                    squads: true,
                    athletes: true
                }
            });
    
           return team;
        } catch (error) {
            throw error;
        }
    }
}