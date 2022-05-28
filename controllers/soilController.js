const soil = require('../models/soil');

const addData = async (req, res) => {
    const soilData = await soil.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            soilData,
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
