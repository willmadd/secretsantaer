-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_recipients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "giverId" INTEGER,
    CONSTRAINT "recipients_giverId_fkey" FOREIGN KEY ("giverId") REFERENCES "recipients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_recipients" ("hash", "id", "name", "password") SELECT "hash", "id", "name", "password" FROM "recipients";
DROP TABLE "recipients";
ALTER TABLE "new_recipients" RENAME TO "recipients";
CREATE UNIQUE INDEX "recipients_hash_key" ON "recipients"("hash");
CREATE UNIQUE INDEX "recipients_giverId_key" ON "recipients"("giverId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
