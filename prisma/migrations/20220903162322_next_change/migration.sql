/*
  Warnings:

  - You are about to drop the `ceologin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `suggestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Applciation_userId_key";

-- AlterTable
ALTER TABLE "suggestion" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ceologin";

-- AddForeignKey
ALTER TABLE "suggestion" ADD CONSTRAINT "suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
