const express = require("express");

const dht11Controller = require('../controllers/dht11Controller');
const dht11 = require('../models/dht11');


const router = express.Router();

router.route('/').post(dht11Controller.addData);
router.route('/').get(async (req,res) => {
    const temps = await dht11.findOne({});
    res.render('env_temp', {
        temps
    })
});


module.exports = router;