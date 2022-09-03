/*
  Warnings:

  - You are about to drop the column `clock` on the `newsPublish` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `ceologin` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `contact` on the `contacts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ceologin" ADD COLUMN     "fullname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "contact",
ADD COLUMN     "contact" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "newsPublish" DROP COLUMN "clock";

-- AlterTable
ALTER TABLE "suggestion" ALTER COLUMN "sent_date" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "testuchun" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "testuchun_pkey" PRIMARY KEY ("id")
);
