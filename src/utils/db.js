// backend/src/utils/db.js
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const serverCa = [
  fs.readFileSync("./src/DigiCertGlobalRootCA.crt.pem", "utf-8"),
];

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true, // Set this to false during development if needed
    ca: serverCa,
  },
});

module.exports = pool;
