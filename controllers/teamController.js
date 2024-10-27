const Team = require("../models/Team");
const User = require("../models/User");
const Task = require("../models/Task");

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    const team = new Team({ name: req.body.name, members: [req.user.userId] });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a member to a team
exports.addMember = async (req, res) => {
  const { teamId, memberId } = req.body;
  try {
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });

    // Check if the user is already a member
    if (team.members.includes(memberId)) {
      return res
        .status(400)
        .json({ message: "User already a member of the team" });
    }

    team.members.push(memberId);
    await team.save();
    res.status(200).json({ message: "Member added to the team", team });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Assign a task to a team
exports.assignTaskToTeam = async (req, res) => {
  const { teamId, taskId } = req.body;
  try {
    const team = await Team.findById(teamId);
    const task = await Task.findById(taskId);

    if (!team) return res.status(404).json({ message: "Team not found" });
    if (!task) return res.status(404).json({ message: "Task not found" });

    team.tasks.push(taskId);
    await team.save();
    res.status(200).json({ message: "Task assigned to team", team });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
