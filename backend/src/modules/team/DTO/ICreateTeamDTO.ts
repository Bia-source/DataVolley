import { Athlete, Game, Squads } from "@prisma/client";

export type ICreateTeamDTO = {
    name: string;
    id_adm: string;
}

export type IReturnCreateTeam = {
    id_team: string,
    name: string,
    id_adm: string,
    games: Game,
    squads: Squads,
    athletes: Athlete
}