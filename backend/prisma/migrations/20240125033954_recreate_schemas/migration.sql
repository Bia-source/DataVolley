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
    "id_category_athlete" TEXT,
    "id_team" TEXT NOT NULL,

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
CREATE TABLE "squads" (
    "id_squad" TEXT NOT NULL,
    "classification" "CATEGORIES" NOT NULL,
    "genre" TEXT NOT NULL,
    "id_team" TEXT NOT NULL,

    CONSTRAINT "squads_pkey" PRIMARY KEY ("id_squad")
);

-- CreateTable
CREATE TABLE "team" (
    "id_team" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_adm" TEXT NOT NULL,
    "games" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id_team")
);

-- CreateTable
CREATE TABLE "set" (
    "id_set" TEXT NOT NULL,
    "id_first_squad" TEXT NOT NULL,
    "id_second_squad" TEXT NOT NULL,
    "set_number" INTEGER NOT NULL,
    "id_game" TEXT NOT NULL,
    "points_first_squad" INTEGER NOT NULL,
    "points_second_squad" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "set_pkey" PRIMARY KEY ("id_set")
);

-- CreateTable
CREATE TABLE "game" (
    "id_game" TEXT NOT NULL,
    "numberSets" INTEGER NOT NULL,
    "id_winner" TEXT NOT NULL,
    "id_first_team" TEXT NOT NULL,
    "id_second_team" TEXT NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id_game")
);

-- CreateTable
CREATE TABLE "_AthleteToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AthleteToSquads" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "team_name_key" ON "team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AthleteToCategory_AB_unique" ON "_AthleteToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AthleteToCategory_B_index" ON "_AthleteToCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AthleteToSquads_AB_unique" ON "_AthleteToSquads"("A", "B");

-- CreateIndex
CREATE INDEX "_AthleteToSquads_B_index" ON "_AthleteToSquads"("B");

-- AddForeignKey
ALTER TABLE "athletes" ADD CONSTRAINT "athletes_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "team"("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "team"("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "squads" ADD CONSTRAINT "squads_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "team"("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "set" ADD CONSTRAINT "set_id_first_squad_fkey" FOREIGN KEY ("id_first_squad") REFERENCES "squads"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "set" ADD CONSTRAINT "set_id_game_fkey" FOREIGN KEY ("id_game") REFERENCES "game"("id_game") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_id_winner_fkey" FOREIGN KEY ("id_winner") REFERENCES "squads"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_id_first_team_fkey" FOREIGN KEY ("id_first_team") REFERENCES "team"("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToCategory" ADD CONSTRAINT "_AthleteToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "athletes"("id_athlete") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToCategory" ADD CONSTRAINT "_AthleteToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToSquads" ADD CONSTRAINT "_AthleteToSquads_A_fkey" FOREIGN KEY ("A") REFERENCES "athletes"("id_athlete") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToSquads" ADD CONSTRAINT "_AthleteToSquads_B_fkey" FOREIGN KEY ("B") REFERENCES "squads"("id_squad") ON DELETE CASCADE ON UPDATE CASCADE;
