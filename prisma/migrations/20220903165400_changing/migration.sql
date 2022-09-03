-- CreateTable
CREATE TABLE "newsPublish" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
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
    "role" TEXT NOT NULL,

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
    "contact" INTEGER NOT NULL,
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

-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "appname" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suggestion" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "suggestName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sent_date" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "suggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggestion" ADD CONSTRAINT "suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
