-- Verify atelierrc:init on pg

BEGIN;

SELECT id FROM "project" WHERE false;

SELECT name FROM "project" WHERE id=1;

SELECT id FROM "furniture" WHERE false;

SELECT id FROM "status" WHERE false;

ROLLBACK;
