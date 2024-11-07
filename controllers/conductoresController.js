const Conductor = require('../models/Conductores');

exports.getAllConductores = async (req, res) => {
  try {
    const conductores = await Conductor.find();
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getConductorById = async (req, res) => {
  try {
    const conductor = await Conductor.findById(req.params.id);
    if (!conductor) return res.status(404).json({ error: 'Conductor no encontrado' });
    res.json(conductor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createConductor = async (req, res) => {
  try {
    const newConductor = new Conductor(req.body);
    await newConductor.save();
    res.status(201).json(newConductor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateConductor = async (req, res) => {
  try {
    const updatedConductor = await Conductor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedConductor) return res.status(404).json({ error: 'Conductor no encontrado' });
    res.json(updatedConductor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteConductor = async (req, res) => {
  try {
    const deletedConductor = await Conductor.findByIdAndDelete(req.params.id);
    if (!deletedConductor) return res.status(404).json({ error: 'Conductor no encontrado' });
    res.json({ message: 'Conductor eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
