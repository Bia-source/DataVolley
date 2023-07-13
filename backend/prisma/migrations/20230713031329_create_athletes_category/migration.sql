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

    CONSTRAINT "athletes_pkey" PRIMARY KEY ("id_athlete")
);

-- CreateTable
CREATE TABLE "category" (
    "id_category" TEXT NOT NULL,
    "classification" "CATEGORIES" NOT NULL,
    "id_team" TEXT NOT NULL,
    "genre" "GENRE" NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id_category")
);

-- CreateIndex
CREATE UNIQUE INDEX "athletes_id_athlete_key" ON "athletes"("id_athlete");

-- CreateIndex
CREATE UNIQUE INDEX "category_id_category_key" ON "category"("id_category");

-- AddForeignKey
ALTER TABLE "athletes" ADD CONSTRAINT "athletes_id_athlete_fkey" FOREIGN KEY ("id_athlete") REFERENCES "category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;
