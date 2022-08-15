/*
  Warnings:

  - Added the required column `role` to the `userLogin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userLogin" ADD COLUMN     "role" TEXT NOT NULL;
