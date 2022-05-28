const express = require("express");

const soilController = require('../controllers/soilController');

const router = express.Router();

router.route('/').post(soilController.addData);

module.exports = router;