const { Router } = require("express");
const {
  searchRecipes,
  recipeId,
  createRecipe,
} = require("../handlers/handlersRecipes.js");

const validate = (req, res, next) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!description)
    return res.status(400).json({ error: "Missing Description" });
  console.log(req.body);
  next();
};

const recipesRoute = Router();

recipesRoute.get("/", searchRecipes);

recipesRoute.get("/:id", recipeId);

recipesRoute.post("/", validate, createRecipe);

module.exports = recipesRoute;
