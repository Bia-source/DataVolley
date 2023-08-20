-- CreateEnum
CREATE TYPE "POSITION" AS ENUM ('LEVANTADOR', 'PONTEIRO', 'OPOSTO', 'LIBERO', 'CENTRAL');

-- CreateEnum
CREATE TYPE "CATEGORIES" AS ENUM ('SUB_15', 'SUB_17', 'SUB_19', 'SUB_21', 'ADULTO');

-- CreateEnum
CREATE TYPE "GENRE" AS ENUM ('FEM', 'MASC');

-- CreateTable
CREATE TABLE "athletes" (
    "id_athlete" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "position" "POSITION" NOT NULL,
    "team" TEXT NOT NULL,
    "id_category_athlete" TEXT,
    "categoryId_category" TEXT NOT NULL,

    CONSTRAINT "athletes_pkey" PRIMARY KEY ("id_athlete")
);

-- CreateTable
CREATE TABLE "category" (
    "id_category" TEXT NOT NULL,
    "classification" "CATEGORIES" NOT NULL,
    "id_team" TEXT NOT NULL,
    "genre" "GENRE" NOT NULL,
    "id_athletes" TEXT[],

    CONSTRAINT "category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "_AthleteToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AthleteToCategory_AB_unique" ON "_AthleteToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AthleteToCategory_B_index" ON "_AthleteToCategory"("B");

-- AddForeignKey
ALTER TABLE "_AthleteToCategory" ADD CONSTRAINT "_AthleteToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "athletes"("id_athlete") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToCategory" ADD CONSTRAINT "_AthleteToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;
