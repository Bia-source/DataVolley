import { prisma } from "../../../database/connect";

export class GetAllAthletesService {
    async execute() {
        try {
            const athletes = await prisma.athlete.findMany();
            return athletes;
        } catch (error) {
            throw error;
        }
    }
}