const Professor = require("../models/Proffesor");

// Create a new professor
const createProfessor = async (req, res) => {
  try {
    const professor = new Professor(req.body);
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all professors
const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.status(200).json(professors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get professor by ID
const getProfessorById = async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);
    if (!professor) return res.status(404).json({ message: "Professor not found" });
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update professor
const updateProfessor = async (req, res) => {
  try {
    const updatedProfessor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProfessor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete professor
const deleteProfessor = async (req, res) => {
  try {
    await Professor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Professor deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProfessor,
  getAllProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
};
