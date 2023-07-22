import { prisma } from "../../../database/connect";
import { ICreateSquadDTO } from "../../squads/DTO/ICreateSquadDTO";


export class CreateCategoryService {
    async execute({ classification, id_team, genre }: ICreateSquadDTO) {
        try {
            const categoryRepository = await prisma.category.create({
                data: {
                    id_team,
                    classification,
                    genre
                },
                select: {
                    athletes: true,
                    classification: true,
                    id_category: true,
                    id_team: true,
                    genre: true
                }
            });

            return categoryRepository;
        } catch (error) {
            throw error;
        }
    }
}
