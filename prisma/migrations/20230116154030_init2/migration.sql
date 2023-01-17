/*
  Warnings:

  - You are about to drop the `Clinet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Request` DROP FOREIGN KEY `Request_clientId_fkey`;

-- DropTable
DROP TABLE `Clinet`;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `tel` VARCHAR(15) NOT NULL,
    `email` VARCHAR(255) NULL,
    `clientType` VARCHAR(50) NOT NULL,
    `busniess` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
