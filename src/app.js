// backend/src/app.js
const express = require("express");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
dotenv.config();

const serverCa = [
  fs.readFileSync("./src/DigiCertGlobalRootCA.crt.pem", "utf-8"),
];

// MySQL connection setup
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: serverCa,
  },
});

// Import routes
const snippetRoutes = require("./routes/snippetRoutes");

// Use routes
app.use("/api/snippets", snippetRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
