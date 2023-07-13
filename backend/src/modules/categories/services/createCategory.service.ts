import { prisma } from "../../../database/connect";
import { ICreateSquadDTO } from "../../squads/DTO/ICreateSquadDTO";


export class CreateCategoryService {
    async execute({ classification, id_team, genre, athletes }: ICreateSquadDTO) {
        try {
            const categoryRepository = await prisma.category.create({
                data: {
                    id_team,
                    classification,
                    genre,
                    athletes: {
                        create: {
                            
                                name: athletes[0].name,
                                position: athletes[0].position,
                                age: athletes[0].age,
                                number: athletes[0].number,
                                team: athletes[0].team,
                                height: athletes[0].height
                            

                        }
                    }
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
