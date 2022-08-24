
-- CreateTable
CREATE TABLE "newsPublish" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "clock" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "newsPublish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "schoolPosition" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    CONSTRAINT "setProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userLogin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userLogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userUsername" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "userUsername_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "appsAppStrore" TEXT NOT NULL,
    "appsGooglePlay" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts_smm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "contacts_smm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendanceDate" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "attendanceDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendancePupil" (
    "id" SERIAL NOT NULL,
    "yes" TEXT NOT NULL,
    "no" TEXT NOT NULL,

    CONSTRAINT "attendancePupil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grade" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "grade_pkey" PRIMARY KEY ("id")
);
