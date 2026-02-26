import pkg from 'pg';

const { Pool } = pkg;

export const db = new Pool({
  user: 'postgres',
  password: 'sean9987',
  host: 'localhost',
  port: 5432,
  database: 'dog_share'
});