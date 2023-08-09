import { Request, Response } from "express";
import { GetCategoriesService } from "../services/getCategories.service";

export class GetCategoriesController {

    async getCategoryByName(req: Request, res: Response): Promise<Response>{
        try {
            const { classification, id_team } = req.body;
            const instanceService = new GetCategoriesService();
            const category = await instanceService.byNameS(classification, id_team);
            return res.status(200).json({
                category: category
            });
        } catch (error) {
            return res.status(400).json({
                 error
            });
        }
    }

    async getCategoryById(req: Request, res: Response): Promise<Response>{
       try {
          const { id_category } = req.body;
          const instanceService = new GetCategoriesService();
          const category = await instanceService.byIdS(id_category);
          return res.status(200).json({
            category
          });
       } catch (error) {
          return res.status(400).json({
             error
          });
       }
    }

    async getCategoriesByTeam(req: Request, res: Response): Promise<Response>{
        try {
            const { id_team } = req.body;
            const instanceService = new GetCategoriesService();
            const categories = await instanceService.byTeamIdS(id_team);
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