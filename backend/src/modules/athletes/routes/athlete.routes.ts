import { Router } from "express";
import { CreateAthleteController } from "../controllers/createAthleteController";
import { GetAllAthletesController } from "../controllers/getAllAthletesController";


const athlete = Router();

const createAthleteController = new CreateAthleteController();
const getAllAthletesController = new GetAllAthletesController();

athlete.post("/", createAthleteController.handle);
athlete.get("/", getAllAthletesController.handle);

export {athlete}