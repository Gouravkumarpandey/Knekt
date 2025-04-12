const express = require("express");
const router = express.Router();
const {
  createProfessor,
  getAllProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor
} = require("../controllers/professorController");

router.post("/", createProfessor);
router.get("/", getAllProfessors);
router.get("/:id", getProfessorById);
router.put("/:id", updateProfessor);
router.delete("/:id", deleteProfessor);

module.exports = router;
