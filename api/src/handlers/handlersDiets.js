const { getDiets } = require("../controllers/dietControllers");

const getAllDiets = async (req, res) => {
  const recetas = await getDiets();
  try {
    res.status(200).json(recetas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllDiets,
};
