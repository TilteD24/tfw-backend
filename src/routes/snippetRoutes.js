// backend/src/routes/snippetRoutes.js
const express = require("express");
const router = express.Router();
const snippetController = require("../controllers/snippetController");

// Get all snippets
router.get("/", snippetController.getAllSnippets);

// Create a new snippet
router.post("/", snippetController.createSnippet);

module.exports = router;
