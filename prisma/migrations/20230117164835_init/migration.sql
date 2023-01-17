-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `tel` VARCHAR(15) NOT NULL,
    `email` VARCHAR(255) NULL,
    `clientType` VARCHAR(50) NOT NULL,
    `business` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectType` VARCHAR(20) NOT NULL,
    `lat` DECIMAL(7, 5) NOT NULL,
    `lng` DECIMAL(7, 5) NOT NULL,
    `monthlyBill` DECIMAL(10, 1) NOT NULL,
    `yearlyYield` DECIMAL(7, 2) NOT NULL,
    `clientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
