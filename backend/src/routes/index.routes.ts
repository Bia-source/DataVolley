import { Router } from "express";
import { athlete } from "../modules/athletes/routes/athlete.routes";
import { category } from "../modules/categories/routes/category.routes";
import { squad } from "../modules/squads/routes/squad.routes";
import { team } from "../modules/team/routes/team.routes";

const routes = Router();


routes.use("/athlete", athlete);
routes.use("/category", category);
routes.use("/squad", squad);
routes.use("/team", team);

export { routes }