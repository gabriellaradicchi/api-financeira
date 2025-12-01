const mongoose = require('mongoose');

const TransacaoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true, 
    },
    tipo: {
        type: String,
        enum: ['entrada', 'saida'], 
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now 
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Transacao', TransacaoSchema);