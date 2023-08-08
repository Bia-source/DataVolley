import { CATEGORIES, GENRE, POSITION } from "@prisma/client";

export type IReturnCreateCategory = {
    athletes: {
        id_athlete: string;
        name: string;
        number: number;
        height: number;
        age: number;
        position: POSITION;
        team: string;
        id_category_athlete: string | null;
    }[];
    classification: CATEGORIES;
    id_category: string;
    id_team: string;
    genre: GENRE;
}