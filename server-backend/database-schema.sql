-- Feedback Table
CREATE TABLE feedback (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL, 
category TEXT NOT NULL,
description TEXT NOT NULL
);

-- Example Data
INSERT INTO feedback (title, category, description)
VALUES 
  ('Dark Mode', 'Feature', 'A suggestion to add a dark mode theme'),
  ('Fix Button Alignment', 'Bug', 'The submit button is misaligned on mobile');