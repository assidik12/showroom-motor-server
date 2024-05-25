-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `handphone` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `merek` VARCHAR(191) NULL,
    `model` VARCHAR(191) NULL,
    `color` VARCHAR(191) NULL,
    `tipe` VARCHAR(191) NULL,
    `tahun` VARCHAR(191) NULL,
    `price` DECIMAL(65, 30) NULL,
    `stok` INTEGER NOT NULL,
    `spesifikasi` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_order` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Transactions_detail_no_order_key`(`no_order`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_products` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,
    `order_number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transactions_detail` ADD CONSTRAINT `Transactions_detail_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_id_products_fkey` FOREIGN KEY (`id_products`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_order_number_fkey` FOREIGN KEY (`order_number`) REFERENCES `Transactions_detail`(`no_order`) ON DELETE RESTRICT ON UPDATE CASCADE;
