// const Pool = require("pg").Pool;
// require("dotenv").config();

// const { PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE, PG_PORT } = process.env;

// const pool = new Pool({
//   user: PG_USER,
//   password: PG_PASSWORD,
//   host: PG_HOST,
//   port: PG_PORT,
//   database: PG_DATABASE,
// //   connectionString: process.env.DBConfigLink,
// //   ssl: {
// //     rejectUnauthorized: false
// // }
// });

// module.exports = pool;

const { Pool } = require('pg');
require("dotenv").config();
const itemsPool = new Pool({
    connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = itemsPool;
