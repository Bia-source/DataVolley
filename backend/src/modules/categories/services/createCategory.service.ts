import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";
import { ICreateSquadDTO } from "../../squads/DTO/ICreateSquadDTO";
import { IReturnCreateCategory } from "../DTO/IReturnCreateCategory";

export class CreateCategoryService {
    async execute({ classification, id_team, genre }: ICreateSquadDTO): Promise<IReturnCreateCategory> {
        try {
            
            const alreadyyExistCategoryInTeam = await prisma.category.findFirst({
                where: {
                    id_team,
                    classification,
                    genre
                }
            });

            if(alreadyyExistCategoryInTeam){
               throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_EXISTS);
            }

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
