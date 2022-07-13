-- Deploy atelierrc:role to pg

BEGIN;

ALTER TABLE "user"
  ADD COLUMN IF NOT EXISTS "role" TEXT DEFAULT 'admin';

COMMIT;
