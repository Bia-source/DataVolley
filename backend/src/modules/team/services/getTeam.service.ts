import { Team } from "@prisma/client";
import { prisma } from "../../../database/connect";
import { AppError } from "../../../shared/error/AppError";
import { MESSAGE_ERROR } from "../../../shared/error/MessagesError";

export class GetTeamService{
   async getAllTeams(): Promise<Team[]>{
      return await prisma.team.findMany();
   }

   async getTeamById(id_team: string): Promise<Team>{
      try {
         const team = await prisma.team.findFirst({ where: { id_team }})
         if(!team){
            throw new AppError(MESSAGE_ERROR.TEAM_NOT_FOUND)
         }
         return team;
      } catch (error) {
         throw error;
      }
   }

   async getTeamByName(name: string): Promise<Team>{
      try {
         const team = await prisma.team.findFirst({ where: { name }})
         if(!team){
            throw new AppError(MESSAGE_ERROR.TEAM_NOT_FOUND)
         }
         return team;
      } catch (error) {
         throw error;
      }
   }
}