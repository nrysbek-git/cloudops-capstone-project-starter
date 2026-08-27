CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name varchar(100),
  email text UNIQUE NOT NULL,
  score bigint DEFAULT 0,
  joined timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS login (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  hash varchar(100) NOT NULL
);
