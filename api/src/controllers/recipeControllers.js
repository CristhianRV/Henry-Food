const { Recipe } = require("../db.js");
const  axios  = require("axios")
require("dotenv").config;
const { API_KEY } = process.env;

const createRecip = async (name, description, healthScore, preparation, image) => await Recipe.create({name, description, healthScore, preparation, image});

const searchID =async (id, source)=>{
    const recipe = source === "api"? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data:await Recipe.findByPk(id);

    return recipe;

}

module.exports = {
    createRecip,
    searchID,
}

