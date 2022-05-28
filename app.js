const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Route imports
const dht11Route = require('./routes/dht11Route');
const soilRoute = require('./routes/soilRoute');

const app = express();

const port = 3000;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
    console.log(
        `[${new Date().toLocaleString()}] >> Sunucu ${port} portunda başlatıldı.`
    );
});

app.use('/dht11', dht11Route);
app.use('/soil', soilRoute);

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
