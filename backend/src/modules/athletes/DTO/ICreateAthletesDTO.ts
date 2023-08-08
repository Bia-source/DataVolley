import { GENRE } from "@prisma/client";
import { CATEGORIES, POSITION } from "../../../shared/enuns";

export type ICreateAthleteDTO = {
    name: string;
    number: number;
    height: number;  
    age: number;  
    position: POSITION;
    team: string;
    category: CATEGORIES;
    genre: GENRE;
}