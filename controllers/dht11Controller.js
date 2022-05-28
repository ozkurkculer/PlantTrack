const dht11 = require('../models/dht11');

const addData = async (req, res) => {
    const dht11Data = await dht11.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            dht11Data,
        });
        console.log(
            `[${new Date().toLocaleString()}] >> Sensorden veri ekleme islemi basarili.`
        );
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
        console.log(
            `[${new Date().toLocaleString()}] >> Sensorden veri ekleme isleminde hata!`
        );
    }
};

module.exports = {
    addData,
};
