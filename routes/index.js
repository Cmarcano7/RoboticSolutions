const path = require("path");
const express = require("express")
const router = express.Router();
const apiRoutes = require("./api/index");
const createRoutes = require("./api/create")

// API Routes
router.use("/api", apiRoutes);
router.use("/add/api", createRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {

  res.sendFile(path.join(__dirname, "../client/public/index.html"));

});

module.exports = router;