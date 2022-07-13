-- Verify atelierrc:role on pg

BEGIN;

SELECT role FROM "user" WHERE false;

ROLLBACK;
