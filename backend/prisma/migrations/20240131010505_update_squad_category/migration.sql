/*
  Warnings:

  - You are about to drop the column `classification` on the `squads` table. All the data in the column will be lost.
  - You are about to drop the `Emplacement` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_category` to the `squads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Emplacement" DROP CONSTRAINT "Emplacement_id_athlete_fkey";

-- DropForeignKey
ALTER TABLE "Emplacement" DROP CONSTRAINT "Emplacement_id_set_fkey";

-- DropForeignKey
ALTER TABLE "Emplacement" DROP CONSTRAINT "Emplacement_id_squad_fkey";

-- AlterTable
ALTER TABLE "squads" DROP COLUMN "classification",
ADD COLUMN     "id_category" TEXT NOT NULL;

-- DropTable
DROP TABLE "Emplacement";

-- CreateTable
CREATE TABLE "emplacement" (
    "id_emplacement" TEXT NOT NULL,
    "stars" "STARS" NOT NULL,
    "id_athlete" TEXT NOT NULL,
    "type_pass" "TYPE_PASS",
    "type_point" "TYPE_POINT",
    "zone" "ZONE",
    "id_squad" TEXT NOT NULL,
    "id_set" TEXT NOT NULL,

    CONSTRAINT "emplacement_pkey" PRIMARY KEY ("id_emplacement")
);

-- AddForeignKey
ALTER TABLE "squads" ADD CONSTRAINT "squads_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emplacement" ADD CONSTRAINT "emplacement_id_athlete_fkey" FOREIGN KEY ("id_athlete") REFERENCES "athletes"("id_athlete") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emplacement" ADD CONSTRAINT "emplacement_id_squad_fkey" FOREIGN KEY ("id_squad") REFERENCES "squads"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emplacement" ADD CONSTRAINT "emplacement_id_set_fkey" FOREIGN KEY ("id_set") REFERENCES "set"("id_set") ON DELETE RESTRICT ON UPDATE CASCADE;
