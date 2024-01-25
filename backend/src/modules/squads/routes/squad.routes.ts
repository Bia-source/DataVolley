import { Router } from "express";
import { CreateSquadController } from "../controllers/createSquadController";

const squad = Router();

const createSquadController = new CreateSquadController();

squad.post("/", createSquadController.handle);

export { squad }