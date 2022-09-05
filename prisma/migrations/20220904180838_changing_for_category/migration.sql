/*
  Warnings:

  - Added the required column `category_id` to the `newsPublish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newsPublish" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "newsPublish" ADD CONSTRAINT "newsPublish_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
