import { Category } from "@prisma/client";
import { prisma } from "../../../database/connect";
import { CATEGORIES } from "../../../shared/enuns";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";

export class GetCategoriesService {
    async byNameS(classification: CATEGORIES, id_team: string): Promise<Category[]> {
        try {
            const categories = await prisma.category.findMany({
                where: {
                    classification,
                    id_team
                },
                select: {
                    id_category: true,
                    classification: true,
                    id_team: true,
                    genre: true,
                    athletes: true
                }
            });

            if(!categories){
                throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_NOT_FOUND + ` Verifique a categoria e numero de identificacao do time`)
            }

            return categories;
        } catch (error) {
            throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_NOT_FOUND + ` Verifique a categoria e numero de identificacao do time`);          
        }
    }

    async byIdS(id_category: string): Promise<Category> {
        try {
            const category = await prisma.category.findFirst({
                where: {
                    id_category
                },
                select: {
                    id_category: true,
                    classification: true,
                    id_team: true,
                    genre: true,
                    athletes: true
                }
            });
            if(!category){
                throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_NOT_FOUND + ` Verifique o numero de identificacao da categoria`)
            }
            
            return category;
        } catch (error) {
            throw error;
        }
    }

    async byTeamIdS(id_team: string): Promise<Category[]>{
        try {
            const categories = await prisma.category.findMany({
                where: {
                    id_team
                },
                select: {
                    id_category: true,
                    classification: true,
                    id_team: true,
                    genre: true,
                    athletes: true
                }
            });

            console.log(categories);
            if(!categories[0]?.athletes){
                throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_NOT_FOUND + ` Verifique o numero de identificacao do time`)
            }
            return categories;
        } catch (error) {
            throw error;
        }
    }

    // async byTeamName(id_team: string): Promise<Category[]>{
    //     try {
    //         const categories = prisma.category.findMany({
    //             where: {
    //                 id_team,
    //             },
    //             select: {
    //                 id_category: true,
    //                 classification: true,
    //                 id_team: true,
    //                 genre: true,
    //                 athletes: true
    //             }
    //         });

    //         if(categories) return categories;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}