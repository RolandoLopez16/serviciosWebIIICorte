const mongoose = require('mongoose');

const ConductorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: String, required: true, unique: true },
  fechaLicencia: { type: String, required: true },
  tarifaPorServicio: { type: Number, required: true }
});

module.exports = mongoose.model('Conductor', ConductorSchema);
