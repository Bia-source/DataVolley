import { CATEGORIES, GENRE, POSITION } from "../../../shared/enuns";

export type ICreateSquadDTO = {
    id_category: string;
    id_team: string;
    genre: GENRE;
}

export interface IAthlete{
    name: string;
    number: number;
    height: number;  
    age: number;  
    position: POSITION;
    team: string;
}