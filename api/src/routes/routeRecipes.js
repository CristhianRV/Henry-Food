const { Router } = require("express");
const { searchRecipes,
    recipeId,
    createRecipe,
} = require("../handlers/handlersRecipes.js");

const recipesRoute = Router();

recipesRoute.get("/",searchRecipes);

recipesRoute.get("/:id",recipeId);

recipesRoute.post("/",createRecipe);


module.exports = recipesRoute;