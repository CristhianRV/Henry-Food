// CONSTANTE DE LAS ACTIONS
import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const GET_DIETS = "GET_DIETS";
export const GET_FILTER = "GET_FILTER";
export const ORDERED_RECIPES = "ORDERED_RECIPES";

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/recipes");
    const dataDiets = await axios.get("/diets");
    dispatch({ type: GET_RECIPES, payload: apiData.data });
    dispatch({ type: GET_DIETS, payload: dataDiets.data });
  };
};

export const getRecipesName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/recipes?name=${name}`);
    dispatch({ type: GET_RECIPES_NAME, payload: apiData.data });
  };
};

export const getRecipeId = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`/recipes/${id}`);
    dispatch({ type: GET_RECIPE_ID, payload: data.data });
  };
};

export const filterRecipes = (data) => {
  return { type: GET_FILTER, payload: data };
};

export const recipesOrder = () => {
  return { type: ORDERED_RECIPES };
};
