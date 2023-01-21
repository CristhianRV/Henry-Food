const {Diet} = require("../db.js");


  const ListDiets = async ()=>{

    const diets = [
        "gluten free",
        "paleolithic",
        "vegetarian",
        "lacto ovo vegetarian",
        "vegan",
        "pescatarian",
        "primal",
        "whole 30",
        "fodmap friendly",
        "dairyFree",
      ];

      diets.forEach(async (diet)=> Diet.findOrCreate({where: {name:diet}}))
      
         

  }

  module.exports = {ListDiets}