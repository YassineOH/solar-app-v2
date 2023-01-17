/*
  Warnings:

  - You are about to alter the column `monthlyBill` on the `Request` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,1)`.
  - You are about to alter the column `yearlyYield` on the `Request` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(7,2)`.

*/
-- AlterTable
ALTER TABLE `Request` MODIFY `lat` DECIMAL(7, 5) NOT NULL,
    MODIFY `lng` DECIMAL(7, 5) NOT NULL,
    MODIFY `monthlyBill` DECIMAL(10, 1) NOT NULL,
    MODIFY `yearlyYield` DECIMAL(7, 2) NOT NULL;
