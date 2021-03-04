const router = require("express").Router();
const infoController = require("../../controllers/infoController");

router.route("/")
  .get(infoController.findAll)
  .post(infoController.create);

router
  .route("/:id")
  .get(infoController.findById)
  .put(infoController.update)
  .delete(infoController.remove);

router
  .route("/serialNumber/:serialNumber")
  .get(infoController.findBySerialNumber)
  .put(infoController.update)
  .delete(infoController.remove);

router
  .route("/endUser/:endUser")
  .get(infoController.findByEndUser)
  .put(infoController.update)
  .delete(infoController.remove);

module.exports = router;