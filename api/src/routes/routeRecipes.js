const { Router } = require("express");
const {
  searchRecipes,
  recipeId,
  createRecipe,
} = require("../handlers/handlersRecipes.js");

const validate = (req, res, next) => {
  const { name, description } = req.body;
  if (!name) res.status(400).json({ error: "Missing name" });
  if (!description) res.status(400).json({ error: "Missing Description" });
  // if (!healthScore) res.status(400).json({ error: "Missing Health Score" });
  console.log(req.body);
  next();
};

const recipesRoute = Router();

recipesRoute.get("/", searchRecipes);

recipesRoute.get("/:id", recipeId);

recipesRoute.post("/", createRecipe);

module.exports = recipesRoute;
