import { Router } from "express";
import { CreateSquadController } from "../controllers/createSquadController";
import { GetSquadController } from "../controllers/getSquadController";

const squad = Router();

const createSquadController = new CreateSquadController();
const getSquadController = new GetSquadController();

squad.post("/", createSquadController.handle);
squad.get("/", getSquadController.getAllSquadsC);
squad.get("/category", getSquadController.getSquadByCategoryC);

export { squad }