// backend/src/controllers/snippetController.js
const snippetModel = require("../models/snippetModel");

// Get all snippets
const getAllSnippets = async (req, res) => {
  try {
    const snippets = await snippetModel.getAllSnippets();
    res.json(snippets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new snippet
const createSnippet = async (req, res) => {
  try {
    const data = req.body;
    const result = await snippetModel.createSnippet(data);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllSnippets,
  createSnippet,
};
