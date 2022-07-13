-- Verify atelierrc:table-domain on pg

BEGIN;

SELECT id FROM "furniture_photo" WHERE false;

ROLLBACK;
