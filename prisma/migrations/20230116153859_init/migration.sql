-- CreateTable
CREATE TABLE `Clinet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `tel` VARCHAR(15) NOT NULL,
    `email` VARCHAR(255) NULL,
    `clientType` VARCHAR(50) NOT NULL,
    `busniess` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectType` VARCHAR(20) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `monthlyBill` DECIMAL(65, 30) NOT NULL,
    `yearlyYield` DECIMAL(65, 30) NOT NULL,
    `clientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clinet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
