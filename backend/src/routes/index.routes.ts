import { Router } from "express";
import { athlete } from "../modules/athletes/routes/athlete.routes";
import { category } from "../modules/categories/routes/category.routes";

const routes = Router();


routes.use("/athlete", athlete);
routes.use("/category", category);

export { routes }