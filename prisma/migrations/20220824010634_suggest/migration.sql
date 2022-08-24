-- CreateTable
CREATE TABLE "suggestion" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "suggestName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sent_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suggestion_pkey" PRIMARY KEY ("id")
);
