const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Route imports
const dht11Route = require('./routes/dht11Route');
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


app.get('/',async (req,res) =>{
    const lastDht = await dht11.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    const lastSoil = await soil.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    res.render('index', {
        lastDht,
        lastSoil
    });
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
