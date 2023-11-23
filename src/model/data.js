const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    titulo: {
        type: String,
        required: true
    },
    regiao: {
        type: Object,
        required: true
    },
});

module.exports = mongoose.model('Data', data);