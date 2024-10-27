const express = require("express");
const {
  createTeam,
  addMember,
  assignTaskToTeam,
} = require("../controllers/teamController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Route to create a team
router.post("/teams", authMiddleware, createTeam);

// Route to add a member to a team
router.post("/teams/add-member", authMiddleware, addMember);

// Route to assign a task to a team
router.post("/teams/assign-task", authMiddleware, assignTaskToTeam);

module.exports = router;
