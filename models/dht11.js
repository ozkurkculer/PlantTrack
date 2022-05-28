const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dht11Schema = new Schema({
    humidity: {
        type: Number,
        default: 0.0,
    },
    temperature: {
        type: Number,
        default: 0.0,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
});

const dht11 = mongoose.model('dht11', dht11Schema);
module.exports = dht11;
