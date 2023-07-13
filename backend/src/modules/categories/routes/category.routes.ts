import { Router } from "express";
import { CreateCategoryController } from "../controllers/createCategory";


const category = Router();

const createCategoryController = new CreateCategoryController();

category.post("/", createCategoryController.handle);

export { category }