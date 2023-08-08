import { prisma } from "../../../database/connect";
import { IReturnGetAthletes } from "../DTO/IReturnAthletesDTO";

export class GetAllAthletesService {
    async execute(name_team: string): Promise<IReturnGetAthletes[]> {
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
}