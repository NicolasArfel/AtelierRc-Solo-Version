-- Revert atelierrc:init from pg

BEGIN;

DROP TABLE IF EXISTS "furniture_photo", "project_photo", "furniture", "project", "status", "user";

DROP DOMAIN "phonenumber", "zipcode", "email";

COMMIT;
