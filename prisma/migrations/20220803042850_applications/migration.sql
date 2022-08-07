-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "appname" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachersApplication" (
    "id" SERIAL NOT NULL,
    "appname" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "system" TEXT NOT NULL,

    CONSTRAINT "teachersApplication_pkey" PRIMARY KEY ("id")
);
