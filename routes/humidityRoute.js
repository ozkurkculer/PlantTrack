const express = require("express");

const dht11 = require('../models/dht11');

const router = express.Router();

router.route('/').get(async (req,res) => {
    const humidity = await dht11.find({});
    res.render('env_humidity', {
        humidity
    })
});

module.exports = router;