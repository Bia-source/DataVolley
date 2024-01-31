/*
  Warnings:

  - Added the required column `name_second_team` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "game" DROP CONSTRAINT "game_id_winner_fkey";

-- AlterTable
ALTER TABLE "game" ADD COLUMN     "name_second_team" TEXT NOT NULL,
ADD COLUMN     "squadsId_squad" TEXT,
ALTER COLUMN "id_winner" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_squadsId_squad_fkey" FOREIGN KEY ("squadsId_squad") REFERENCES "squads"("id_squad") ON DELETE SET NULL ON UPDATE CASCADE;
