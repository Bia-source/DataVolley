import { Request, Response } from "express";
import { GetCategoriesService } from "../services/getCategories.service";

export class GetCategoriesController {
    async getAllCategoriesC(req: Request, res: Response) {
        try {
            const instanceService = new GetCategoriesService();
            const categories = await instanceService.getAllCategories();
            return res.json({ categories });
        } catch (error) {
            
        }
    }
    async getCategoryByName(req: Request, res: Response): Promise<Response> {
        try {
            const { classification, id_team } = req.body;
            const instanceService = new GetCategoriesService();
            const category = await instanceService.byName(classification, id_team);
            return res.status(200).json({
                category: category
            });
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }

    async getCategoryById(req: Request, res: Response): Promise<Response> {
        try {
            const { id_category } = req.body;
            const instanceService = new GetCategoriesService();
            const category = await instanceService.byId(id_category);
            return res.status(200).json({
                category
            });
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }

    async getCategoriesByTeam(req: Request, res: Response): Promise<Response> {
        try {
            const { id_team } = req.body;
            const instanceService = new GetCategoriesService();
            const categories = await instanceService.byTeamId(id_team);
            return res.status(200).json({
                categories
            });
        } catch (error) {
            return res.status(400).json({
                error
            });
        }
    }
}