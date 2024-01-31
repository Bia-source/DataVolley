import { Category } from "@prisma/client";
import { prisma } from "../../../database/connect";
import { CATEGORIES } from "../../../shared/enuns";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";

export class GetCategoriesService {
    async getAllCategories(){
      return await prisma.category.findMany();
    }

    async byName(classification: CATEGORIES, id_team: string): Promise<Category[]> {
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
                    id_athletes: true
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

    async byId(id_category: string): Promise<Category> {
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
                    id_athletes: true
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

    async byTeamId(id_team: string): Promise<Category[]>{
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
                    id_athletes: true
                }
            });

            if(!categories[0]?.classification){
                throw new AppError(MESSAGE_ERROR.VALIDATE_CATEGORY_NOT_FOUND + ` Verifique o numero de identificacao do time`)
            }
            return categories;
        } catch (error) {
            throw error;
        }
    }

    async byTeamName(id_team: string): Promise<Category[]>{
        try {
            const categories = prisma.category.findMany({
                where: {
                    id_team,
                },
                select: {
                    id_category: true,
                    classification: true,
                    id_team: true,
                    genre: true,
                    id_athletes: true
                }
            });

            if(!categories){
                throw new AppError(MESSAGE_ERROR.CATEGORIES_DONT_EXISTS_TEAM);
            } 
            return categories;
        } catch (error) {
            throw error;
        }
    }
}