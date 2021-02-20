const router = require("express").Router();
const infoRoutes = require("./info");

router.use("/info", infoRoutes);

module.exports = router;
