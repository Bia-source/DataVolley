import { GENRE, CATEGORIES } from "@prisma/client";
import { POSITION } from "../../../shared/enuns";

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