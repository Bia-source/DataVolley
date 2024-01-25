/*
  Warnings:

  - You are about to drop the `Point` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TYPE_PASS" AS ENUM ('SERVE', 'LARGADA', 'DEFENSE');

-- DropForeignKey
ALTER TABLE "Point" DROP CONSTRAINT "Point_id_athlete_fkey";

-- DropForeignKey
ALTER TABLE "Point" DROP CONSTRAINT "Point_id_set_fkey";

-- DropForeignKey
ALTER TABLE "Point" DROP CONSTRAINT "Point_id_squad_fkey";

-- DropTable
DROP TABLE "Point";

-- CreateTable
CREATE TABLE "Emplacement" (
    "id_emplacement" TEXT NOT NULL,
    "stars" "STARS" NOT NULL,
    "id_athlete" TEXT NOT NULL,
    "type_pass" "TYPE_PASS",
    "type_point" "TYPE_POINT",
    "zone" "ZONE",
    "id_squad" TEXT NOT NULL,
    "id_set" TEXT NOT NULL,

    CONSTRAINT "Emplacement_pkey" PRIMARY KEY ("id_emplacement")
);

-- AddForeignKey
ALTER TABLE "Emplacement" ADD CONSTRAINT "Emplacement_id_athlete_fkey" FOREIGN KEY ("id_athlete") REFERENCES "athletes"("id_athlete") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emplacement" ADD CONSTRAINT "Emplacement_id_squad_fkey" FOREIGN KEY ("id_squad") REFERENCES "squads"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emplacement" ADD CONSTRAINT "Emplacement_id_set_fkey" FOREIGN KEY ("id_set") REFERENCES "set"("id_set") ON DELETE RESTRICT ON UPDATE CASCADE;
