const {
  createRecip,
  searchID,
  searchName,
  searchAll,
} = require("../controllers/recipeControllers.js");

const searchRecipes = async (req, res) => {
  // para las queries
  //Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  //Si no existe ninguna receta mostrar un mensaje adecuado

  const { name } = req.query;

  try {
    const recetas = name ? await searchName(name) : await searchAll();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const recipeId = async (req, res) => {
  //Para el detalle por id
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const recipe = await searchID(id, source);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createRecipe = async (req, res) => {
  const { name, description, healthScore, preparation, diets, image } =
    req.body;

  try {
    const newRecipe = await createRecip(
      name,
      description,
      healthScore,
      preparation,
      diets,
      image
    );
    res.status(201).send("Creado con exito!");
  } catch (error) {
    // if (!name) return res.status(400).send("Missing name");
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  searchRecipes,
  recipeId,
  createRecipe,
};
