const mariochar = require("../models/marioChar");

const getAllCharacter = async (req, res) => {
  try {
    const tasks = await mariochar.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCharacter = async (req, res) => {
  try {
    const { name, weight } = req.body;
    if (!name || !weight) {
      throw new Error("either name or weight is missing");
    }
    const task = await mariochar.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCharacter = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const char = await mariochar.findOne({ _id: taskID });
    if (!char) {
      const e = new Error(`Cannot find any user with id: ${taskID}`);
      throw e;
    }
    res.status(200).json({ char });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await mariochar.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      const e = new Error(`Cannot find any user with id: ${taskID}`);
      throw e;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await mariochar.findOneAndDelete({ _id: taskID });
    if (!task) {
      const e = new Error(`Cannot find any user with id: ${taskID}`);
      throw e;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCharacter,
  createCharacter,
  getCharacter,
  updateCharacter,
  deleteCharacter,
};
