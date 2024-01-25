-- CreateTable
CREATE TABLE "Squads" (
    "id_squad" TEXT NOT NULL,
    "classification" "CATEGORIES" NOT NULL,
    "id_team" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Squads_pkey" PRIMARY KEY ("id_squad")
);

-- CreateTable
CREATE TABLE "_AthleteToSquads" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AthleteToSquads_AB_unique" ON "_AthleteToSquads"("A", "B");

-- CreateIndex
CREATE INDEX "_AthleteToSquads_B_index" ON "_AthleteToSquads"("B");

-- AddForeignKey
ALTER TABLE "_AthleteToSquads" ADD CONSTRAINT "_AthleteToSquads_A_fkey" FOREIGN KEY ("A") REFERENCES "athletes"("id_athlete") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AthleteToSquads" ADD CONSTRAINT "_AthleteToSquads_B_fkey" FOREIGN KEY ("B") REFERENCES "Squads"("id_squad") ON DELETE CASCADE ON UPDATE CASCADE;
