-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "cretedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
