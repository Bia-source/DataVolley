import { prisma } from "../../../database/connect";
import { IReturnGetAthletes } from "../DTO/IReturnAthletesDTO";

export class GetAthletesService {
    async getAthleteByNameTeam(name_team: string): Promise<IReturnGetAthletes[]> {
        try {
            const athletes = await prisma.athlete.findMany({
                where: {
                    team: name_team
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });
            return athletes;
        } catch (error) {
            throw error;
        }
    }

    async getAthleteById(id_athlete: string): Promise<IReturnGetAthletes>{
        try {
            const athlete = await prisma.athlete.findFirst({
                where: {
                    id_athlete
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });

            if(athlete === undefined || athlete === null){
                throw Error("Não foi possivel completar essa solicitacao verifique os dados")
            }
            return athlete;
        } catch (error) {
            throw error;
        }
    }
}