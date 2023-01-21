const { Router } = require("express");
const { searchRecipes,
    recipeId,
    createRecipe,
} = require("../handlers/handlersRecipes.js");

const validate = (req, res, next)=>{
    const {name, description} = req.body;
    if(!name) res.status(400).json({error:"Missing name"});
    if(!description) res.status(400).json({error:"Missing Description"});
    next;
}

const recipesRoute = Router();

recipesRoute.get("/",searchRecipes);

recipesRoute.get("/:id",recipeId);

recipesRoute.post("/", validate, createRecipe);


module.exports = recipesRoute;