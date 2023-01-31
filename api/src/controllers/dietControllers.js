const { Diet } = require("../db.js");
const { Recipe } = require("../db.js");

const ListDiets = async () => {
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

  diets.forEach(
    async (diet) => await Diet.findOrCreate({ where: { name: diet } })
  );
};

const getDiets = async () => {
  const dietas = await Diet.findAll({
    include: {
      model: Recipe,
      attributes: [
        "name",
        "description",
        "healthScore",
        "preparation",
        "image",
      ],
    },
  });
  return dietas;
};

module.exports = { ListDiets, getDiets };
