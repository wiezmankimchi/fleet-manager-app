-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "registration" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL,
    "carModelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarBrand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,

    CONSTRAINT "CarBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "carBrandId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "lastName" TEXT NOT NULL,
    "registration" TEXT,
    "registrationDate" TIMESTAMP(3),
    "registratonImage" TEXT,
    "companyId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,
    "firstName" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_carBrandId_fkey" FOREIGN KEY ("carBrandId") REFERENCES "CarBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
