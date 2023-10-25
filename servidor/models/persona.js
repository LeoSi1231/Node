const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
});

const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;