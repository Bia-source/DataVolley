import { Squads } from "@prisma/client";
import { prisma } from "../../../database/connect";


export class GetSquadService{
    async getAllSquads(): Promise<Squads[]>{
        return await prisma.squads.findMany();
    }

    async getSquadsByCategory(id_category: string): Promise<Squads[]>{
      return await prisma.squads.findMany({ where: { id_category}})
    }
}