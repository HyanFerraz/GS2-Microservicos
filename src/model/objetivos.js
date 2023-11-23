const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetivoSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    indicadores: {
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('objetivos', objetivoSchema);