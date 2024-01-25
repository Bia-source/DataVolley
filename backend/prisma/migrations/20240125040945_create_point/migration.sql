-- CreateEnum
CREATE TYPE "STARS" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "ZONE" AS ENUM ('PARALELA', 'PARAGONAL', 'DIAGONAL_LONGA', 'DIAGONAL_CURTA');

-- CreateEnum
CREATE TYPE "TYPE_POINT" AS ENUM ('LARGADA', 'ATTACK', 'BLOCK', 'ACE', 'OPPONENT_ERROR');

-- CreateTable
CREATE TABLE "Point" (
    "id_point" TEXT NOT NULL,
    "stars" "STARS" NOT NULL,
    "zone" "ZONE" NOT NULL,
    "type_point" "TYPE_POINT" NOT NULL,
    "id_athlete" TEXT,
    "id_squad" TEXT NOT NULL,
    "id_set" TEXT NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id_point")
);

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_id_athlete_fkey" FOREIGN KEY ("id_athlete") REFERENCES "athletes"("id_athlete") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_id_squad_fkey" FOREIGN KEY ("id_squad") REFERENCES "squads"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_id_set_fkey" FOREIGN KEY ("id_set") REFERENCES "set"("id_set") ON DELETE RESTRICT ON UPDATE CASCADE;
