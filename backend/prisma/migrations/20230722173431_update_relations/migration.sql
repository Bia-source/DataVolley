-- DropForeignKey
ALTER TABLE "athletes" DROP CONSTRAINT "athletes_id_athlete_fkey";

-- AlterTable
ALTER TABLE "athletes" ADD COLUMN     "id_category_athlete" TEXT;

-- AddForeignKey
ALTER TABLE "athletes" ADD CONSTRAINT "athletes_id_category_athlete_fkey" FOREIGN KEY ("id_category_athlete") REFERENCES "category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;
