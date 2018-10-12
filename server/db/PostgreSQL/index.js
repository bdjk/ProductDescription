// const Sequelize = require("sequelize");
// const sequelize = new Sequelize({
//   host: process.env["DB_HOST"],
//   database: process.env["DB_NAME"],
//   username: process.env["DB_USER"],
//   password: process.env["DB_PASS"] !== "" ? process.env["DB_PASS"] : null,
//   port: process.env["DB_PORT"] !== "" ? process.env["DB_PORT"] : null,
//   dialect: "postgres", 
//   logging: false,
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

// module.exports = sequelize;


const { Pool, Client } = require('pg')
// const winston = require("winston");

// pools will use environment variables
// for connection information
const pool = new Pool({
  host: process.env["DB_HOST"],
  database: process.env["DB_NAME"],
  user: process.env["DB_USER"],
  password: process.env["DB_PASS"] !== "" ? process.env["DB_PASS"] : null,
  port: process.env["DB_PORT"] !== "" ? process.env["DB_PORT"] : null,
  max: 1000,
  // idleTimeoutMillis: 1000
})
module.exports = pool;

// const client = new Client({
//   host: process.env["DB_HOST"],
//   database: process.env["DB_NAME"],
//   user: process.env["DB_USER"],
//   password: process.env["DB_PASS"] !== "" ? process.env["DB_PASS"] : null,
//   port: process.env["DB_PORT"] !== "" ? process.env["DB_PORT"] : null,
// })

// client.connect();
// pool.on('error', function (err) {
//   winston.error('idle client error', err.message, err.stack)
// })

// module.exports = { pool, client};

