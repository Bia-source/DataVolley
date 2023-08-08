import { Category } from "@prisma/client";
import { prisma } from "../../../database/connect";
import { CATEGORIES } from "../../../shared/enuns";

export class GetCategoriesService {
    async byName(classification: CATEGORIES, id_team: string): Promise<Category | undefined> {
        try {
            const categories = await prisma.category.findFirst({
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

            if(categories) return categories;
        } catch (error) {
            throw error;
        }
    }

    async byId(id_category: string): Promise<Category | undefined> {
        try {
            const categories = await prisma.category.findFirst({
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

            if(categories) return categories;
        } catch (error) {
            throw error;
        }
    }

    async byTeam(id_team: string): Promise<Category[] | undefined>{
        try {
            const categories = prisma.category.findMany({
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

            if(categories) return categories;
        } catch (error) {
            throw error;
        }
    }
}