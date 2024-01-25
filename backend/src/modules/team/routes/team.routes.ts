import { Router } from "express";
import { CreateTeamController } from "../controllers/createTeamController";

const team = Router();

const createTeamController = new CreateTeamController();

team.post("/", createTeamController.handle);

export { team }