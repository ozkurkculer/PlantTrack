const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

//Route imports
const temperatureRoute = require('./routes/temperatureRoute');
const humidityRoute = require('./routes/humidityRoute');
const soilRoute = require('./routes/soilRoute');

//Model import
const dht11 = require('./models/dht11');
const soil = require('./models/soil');

const app = express();

const port = 3000;

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(
        `[${new Date().toLocaleString()}] >> Sunucu ${port} portunda başlatıldı.`
    );
});

app.get('/', async (req, res) => {
    const lastDht = await dht11
        .findOne()
        .sort({ field: 'asc', _id: -1 })
        .limit(1);
    const lastSoil = await soil
        .findOne()
        .sort({ field: 'asc', _id: -1 })
        .limit(1);
    res.render('index', {
        lastDht,
        lastSoil,
    });
});

app.use('/temperature', temperatureRoute);
app.use('/humidity', humidityRoute);
app.use('/soil', soilRoute);

const minutes = 1,
    the_interval = minutes * 60 * 1000;
setInterval(async function () {
    const resTemperature = await fetch(
        'https://api.thingspeak.com/channels/1751567/fields/1.json?api_key=FH6BYRCU7IST4Z5T&results=1'
    ).then((response) => response.json());

    const resHumidity = await fetch(
        'https://api.thingspeak.com/channels/1751567/fields/2.json?api_key=FH6BYRCU7IST4Z5T&results=1'
    ).then((response) => response.json());

    const resSoilRatio = await fetch(
        'https://api.thingspeak.com/channels/1751567/fields/3.json?api_key=FH6BYRCU7IST4Z5T&results=1'
    ).then((response) => response.json());

    const newDHTData = {
        "temperature": Number(resTemperature.feeds[0].field1),
        "humidity": Number(resHumidity.feeds[0].field2),
        "timeStamp": resTemperature.feeds[0].created_at
    }
    const newSoilData = {
        "soilRatio": Number(resSoilRatio.feeds[0].field3),
        "timeStamp": resSoilRatio.feeds[0].created_at
    }

    await dht11.create(newDHTData);
    await soil.create(newSoilData);

    console.log(
        `[${new Date().toLocaleString()}] >> ThingSpeak verileri eklendi.`
    );
}, the_interval);

mongoose
    .connect(
        'mongodb+srv://planttrack__admin:fvRtCguF2oxR2Ieq@planttrack.5athz.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log(
            `[${new Date().toLocaleString()}] >> Veritabanı bağlantısı başarılı.`
        );
    })
    .catch((err) => {
        console.log(
            `[${new Date().toLocaleString()}] >> Veritabanına bağlanılamadı.`
        );
        console.log(err);
    });
