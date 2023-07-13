import { POSITION } from "../../../shared/enuns";

export interface ICreateAthleteDTO {
    name: string;
    number: number;
    height: number;  
    age: number;  
    position: POSITION;
    team: string;
}