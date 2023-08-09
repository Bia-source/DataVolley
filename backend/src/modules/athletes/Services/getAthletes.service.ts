import { Athlete, GENRE } from "@prisma/client";
import { prisma } from "../../../database/connect";
import { IReturnGetAthletes } from "../DTO/IReturnAthletesDTO";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";

export class GetAthletesService {
    async getAthleteByNameTeamS(name_team: string): Promise<IReturnGetAthletes[]> {
        try {
            const athletes = await prisma.athlete.findMany({
                where: {
                    team: name_team
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });

            if (!athletes[0]?.id_athlete) {
                throw new AppError(MESSAGE_ERROR.VALIDATE_WITHOUT_ATHLETES)
            }
            return athletes;
        } catch (error) {
            throw error;
        }
    }

    async getAthleteByIdS(id_athlete: string): Promise<IReturnGetAthletes> {
        try {
            const athlete = await prisma.athlete.findFirst({
                where: {
                    id_athlete
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });

            if (athlete === undefined || athlete === null) {
                throw new AppError(MESSAGE_ERROR.VALIDATE_GET_ATHLETE_BY_ID_ERROR)
            }
            return athlete;
        } catch (error) {
            throw error;
        }
    }

    async getAthleteByNameS(name_athlete: string): Promise<IReturnGetAthletes> {
        try {
            const athlete = await prisma.athlete.findFirst({
                where: {
                    name: name_athlete
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });

            if (athlete === undefined || athlete === null) {
                throw new AppError(MESSAGE_ERROR.VALIDATE_GET_ATHLETE_BY_NAME_ERROR)
            }

            return athlete;
        } catch (error) {
            throw error;
        }
    }

    async getAthletesByCategoryIdS(id_category: string, genre: GENRE): Promise<IReturnGetAthletes[]> {
        try {
            const athletes = await prisma.athlete.findMany({
                where: {
                    category: {
                        id_category,
                        genre
                    }
                },
                select: {
                    id_athlete: true,
                    name: true,
                    number: true,
                    height: true,
                    age: true,
                    position: true,
                    team: true,
                    category: true
                }
            });

            if (!athletes[0]?.id_athlete) {
                throw new AppError(MESSAGE_ERROR.VALIDATE_WITHOUT_ATHLETES + `nesta categoria`);
            }
            return athletes;
        } catch (error) {
            throw error;
        }
    }
}