import { CATEGORIES, GENRE, POSITION } from "@prisma/client";

export type IReturnCreateAthlete = {
       id_athlete: string;
       name: string;
       number: number;
       height: number;
       age: number;
       position: POSITION;
       team: string;
       id_category_athlete: string | null;
}

export type IReturnGetAthletes = {
        id_athlete: string;
        name: string;
        number: number;
        height: number;
        age: number;
        position: POSITION;
        team: string;
        category: {
            id_category: string;
            classification: CATEGORIES;
            id_team: string;
            genre: GENRE;
        } | null;
}
    
