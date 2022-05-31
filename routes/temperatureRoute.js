const express = require("express");

const dht11 = require('../models/dht11');

const router = express.Router();

router.route('/').get(async (req,res) => {
    const temps = await dht11.find({});
    res.render('env_temp', {
        temps
    })
});

module.exports = router;