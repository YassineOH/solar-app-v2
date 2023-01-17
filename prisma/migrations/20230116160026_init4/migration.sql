/*
  Warnings:

  - You are about to drop the column `busniess` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `busniess`,
    ADD COLUMN `business` VARCHAR(50) NULL;
