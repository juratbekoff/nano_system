/*
  Warnings:

  - You are about to drop the column `system` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `application` table. All the data in the column will be lost.
  - You are about to drop the `adminrole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attendanceDate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attendancePupil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contacts_smm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `grade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `setProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userLogin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userUsername` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userrole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teachername` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_userId_fkey";

-- DropForeignKey
ALTER TABLE "newsPublish" DROP CONSTRAINT "newsPublish_category_id_fkey";

-- DropForeignKey
ALTER TABLE "suggestion" DROP CONSTRAINT "suggestion_userId_fkey";

-- AlterTable
ALTER TABLE "application" DROP COLUMN "system",
DROP COLUMN "userId",
ADD COLUMN     "teachername" TEXT NOT NULL,
ADD COLUMN     "userID" INTEGER NOT NULL;

-- DropTable
DROP TABLE "adminrole";

-- DropTable
DROP TABLE "attendanceDate";

-- DropTable
DROP TABLE "attendancePupil";

-- DropTable
DROP TABLE "contacts";

-- DropTable
DROP TABLE "contacts_smm";

-- DropTable
DROP TABLE "grade";

-- DropTable
DROP TABLE "setProfile";

-- DropTable
DROP TABLE "userLogin";

-- DropTable
DROP TABLE "userUsername";

-- DropTable
DROP TABLE "userrole";

-- CreateTable
CREATE TABLE "teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ceo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ceo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testUser" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "testUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "login" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "testColumn" TEXT NOT NULL,

    CONSTRAINT "testName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "testNameId" INTEGER NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suggest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "suggest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_permissionsTotestUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_permissionsTotestUser_AB_unique" ON "_permissionsTotestUser"("A", "B");

-- CreateIndex
CREATE INDEX "_permissionsTotestUser_B_index" ON "_permissionsTotestUser"("B");

-- AddForeignKey
ALTER TABLE "newsPublish" ADD CONSTRAINT "newsPublish_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggestion" ADD CONSTRAINT "suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_testNameId_fkey" FOREIGN KEY ("testNameId") REFERENCES "testName"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permissionsTotestUser" ADD CONSTRAINT "_permissionsTotestUser_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permissionsTotestUser" ADD CONSTRAINT "_permissionsTotestUser_B_fkey" FOREIGN KEY ("B") REFERENCES "testUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
