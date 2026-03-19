ALTER TABLE portfolio ADD COLUMN IF NOT EXISTS images text[] DEFAULT '{}';
UPDATE portfolio SET images = ARRAY[image] WHERE image IS NOT NULL AND image != '';