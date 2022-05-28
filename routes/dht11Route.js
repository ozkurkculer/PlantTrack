const express = require("express");

const dht11Controller = require('../controllers/dht11Controller');

const router = express.Router();

router.route('/').post(dht11Controller.addData);

module.exports = router;