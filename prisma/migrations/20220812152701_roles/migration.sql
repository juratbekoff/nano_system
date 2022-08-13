-- CreateTable
CREATE TABLE "adminrole" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "adminrole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userrole" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "userrole_pkey" PRIMARY KEY ("id")
);
