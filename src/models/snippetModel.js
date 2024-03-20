// backend/src/models/snippetModel.js
const pool = require("../utils/db");

// Get all snippets
const getAllSnippets = async () => {
  try {
    const res = await pool.query("SELECT * FROM snippets");
    const rows = res[0];

    return rows;
  } catch (e) {
    console.log(e);
  }
};

// Create a new snippet
const createSnippet = async (data) => {
  try {
    const result = await pool.query("INSERT INTO snippets SET ?", data);

    return result[0];
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllSnippets,
  createSnippet,
};
