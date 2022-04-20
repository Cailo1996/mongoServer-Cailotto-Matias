const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    Brand: {
        type: String,
        required: true,
        unique: true,
    },
});
const Guitar = mongoose.model('Guitar', storeSchema);

module.exports = {Guitar}