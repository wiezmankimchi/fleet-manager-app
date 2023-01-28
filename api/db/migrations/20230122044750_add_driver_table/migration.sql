-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "lastName" TEXT NOT NULL,
    "registration" TEXT,
    "registrationDate" TIMESTAMP(3),
    "registratonImage" TEXT,
    "companyId" INTEGER,
    "carId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 1,
    "updatedBy" INTEGER,
    "firstName" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;
