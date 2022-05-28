const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soilSchema = new Schema({
    soilRatio: {
        type: Number,
        default: 0,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
});

const soil = mongoose.model('soil', soilSchema);
module.exports = soil;
