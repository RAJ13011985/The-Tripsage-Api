const express = require("express")
const tourController = require("../controllers/tour_controller")
const router =express.Router()
router.route("/").get(tourController.getAllTours).post(tourController.createTour)
router.route("/:id").get(tourController.specificTour).patch(tourController.updateTour).delete(tourController.deleteTour)
module.exports = router