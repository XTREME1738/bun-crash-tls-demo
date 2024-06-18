import { Pool } from 'pg';

// Found after trying to connect to a postgres database with TLS/SSL, upon TLS upgrade Bun crashes
const pgConfig = {
  host: 'localhost',
  port: 5432,
  database: 'demo',
  user: 'demo',
  password: 'demopass',
  ssl: {
    rejectUnauthorized: true
  }
};

const pool = new Pool(pgConfig);
pool.connect().then(() => console.log('Connection success')).catch((e) => console.error('Connection failure', e));
