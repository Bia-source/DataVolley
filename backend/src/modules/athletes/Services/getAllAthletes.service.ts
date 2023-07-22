import { prisma } from "../../../database/connect";

export class GetAllAthletesService {
    async execute() {
        try {
            const athletes = await prisma.athlete.findMany({
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