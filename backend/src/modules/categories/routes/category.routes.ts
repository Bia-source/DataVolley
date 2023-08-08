import { Router } from "express";
import { CreateCategoryController } from "../controllers/createCategory";
import { GetCategoriesController } from "../controllers/getCategoriesController";


const category = Router();

const createCategoryController = new CreateCategoryController();
const getCategoryController = new GetCategoriesController();

category.post("/", createCategoryController.handle);
category.get("/search_by_team", getCategoryController.getCategoriesByTeam);
category.get("/search_by_name", getCategoryController.getCategoryByName);
category.get("/search_by_id", getCategoryController.getCategoryById);

export { category }