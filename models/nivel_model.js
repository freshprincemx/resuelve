const {Schema, model} = require('mongoose');

const NivelSchema = Schema({
    nivel: {
        type: String,
        required: [true, 'El nivel es obligatorio'],
        unique: true
    },
    golesxmes: {
        type: Number,
        default: 0
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Nivel', NivelSchema);