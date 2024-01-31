import { Router } from "express";
import { CreateTeamController } from "../controllers/createTeamController";
import { GetTeamController } from "../controllers/getTeamController";

const team = Router();

const createTeamController = new CreateTeamController();
const getTeamController = new GetTeamController();

team.post("/", createTeamController.handle);
team.get("/", getTeamController.getAllTeamsC);
team.get("/name", getTeamController.getTeamByNameC);
team.get("/id", getTeamController.getTeamByIdC);

export { team }