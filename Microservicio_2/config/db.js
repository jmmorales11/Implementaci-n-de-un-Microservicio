const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST || 'db',
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos PostgreSQL');
    }
});

module.exports = pool;
