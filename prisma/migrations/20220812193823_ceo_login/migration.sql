-- CreateTable
CREATE TABLE "ceoLogin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ceoLogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ceologin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ceologin_pkey" PRIMARY KEY ("id")
);
