const { Recipe } = require("../db.js");
const { Diet } = require("../db.js");
const { cleanApi } = require("../utils/funciones.js");
const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config;
const { API_KEY1 } = process.env;

const searchAll = async () => {
  const dataApiRow = (
    await axios.get(
      "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`
    )
  ).data;
  const dataApi = cleanApi(dataApiRow.results);

  const dataBDD = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  return [...dataBDD, ...dataApi];
};

const searchName = async (name) => {
  const dataApiRow = (
    await axios.get(
      "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`
    )
  ).data;
  const dataApi = cleanApi(dataApiRow.results);
  const filterApi = dataApi.filter((element) =>
    element.name.toLowerCase().includes(name.toLowerCase())
  );

  const dataBDD = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return [...dataBDD, ...filterApi];
};

const searchID = async (id, source) => {
  const recipe =
    source === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY1}`
          )
        ).data
      : await Recipe.findByPk(id, {
          include: {
            model: Diet,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });

  if (source === "api") {
    return {
      id: recipe.id,
      name: recipe.title,
      description: recipe.summary,
      healthScore: recipe.healthScore,
      preparation: recipe.analyzedInstructions[0]?.steps
        .map((step) => step.step)
        .join(" "),
      image: recipe.image,
      diets: recipe.diets,
    };
  }

  return recipe;
};

const createRecip = async (
  name,
  description,
  healthScore,
  preparation,
  diets,
  image
) => {
  const newRecip = await Recipe.create({
    name,
    description,
    healthScore,
    preparation,
    diets,
    image,
  });
  const dietas = await Diet.findAll({ where: { name: diets } });
  await newRecip.addDiets(dietas);
  return newRecip;
};

module.exports = {
  createRecip,
  searchID,
  searchName,
  searchAll,
};
