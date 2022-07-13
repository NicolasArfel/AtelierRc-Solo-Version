-- Revert atelierrc:role from pg

BEGIN;

ALTER TABLE "user"
  DROP COLUMN IF EXISTS "role";


COMMIT;
