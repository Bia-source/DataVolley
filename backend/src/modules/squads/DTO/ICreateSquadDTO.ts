import { CATEGORIES, GENRE, POSITION } from "../../../shared/enuns";

export interface ICreateSquadDTO {
    classification: CATEGORIES;
    id_team: string;
    genre: GENRE;
}

interface IAthlete{
    name: string;
    number: number;
    height: number;  
    age: number;  
    position: POSITION;
    team: string;
}