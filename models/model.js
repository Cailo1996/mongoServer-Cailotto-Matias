const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    brand: {
        type: String,
        required: true,
        unique: false
    },
    model: {
        type: String,
        required: true,  
    },
    year: {
        type: Number,
        required: true,
    },
    color : {
        type: String,
        required: true,
    },
});
const Guitar = mongoose.model('Guitar', storeSchema);

module.exports = {Guitar}