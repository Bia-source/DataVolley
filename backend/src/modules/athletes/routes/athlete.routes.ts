import { Router } from "express";
import { CreateAthleteController } from "../controllers/createAthleteController";
import { GetAthletesController } from "../controllers/getAthletesController";


const athlete = Router();

const createAthleteController = new CreateAthleteController();
const getAthletesController = new GetAthletesController();

athlete.post("/", createAthleteController.handle);
athlete.get("/search_by_name_team", getAthletesController.getAthleteByNameTeamC);
athlete.get("/search_by_id_athlete", getAthletesController.getAthleteByIdC);

export {athlete}