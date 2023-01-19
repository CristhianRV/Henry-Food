const { createRecip, searchID } = require("../controllers/recipeControllers.js");




const searchRecipes = (req, res)=>{// para las queries
    res.status(200).send("Estoy en Recipes");
}

const recipeId =async (req, res)=>{//Para el detalle por id
    const { id } = req.params;
    const source = isNaN(id)? "bdd":"api";
    try {
        const recipe = await searchID(id,source);
        res.status(200).json(recipe);
        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }



    res.status(200).send(id);

}

const createRecipe = async (req, res)=>{
    
    try {
        const { name, description, healthScore, preparation, image } = req.body;

        const newRecipe =await createRecip(name, description, healthScore, preparation, image);
        res.status(201).json(newRecipe);

        
    } catch (error) {
        res.status(404).json({error: error.message});
    }

}

module.exports = {
    searchRecipes,
    recipeId,
    createRecipe,
}