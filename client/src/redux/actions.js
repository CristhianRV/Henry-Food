// CONSTANTE DE LAS ACTIONS
import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";

// const GET_USER = "GET_USER";

export const getRecipes = (receta) => {
  return async function (dispatch) {
    const apiData = await axios.get("/recipes");
    dispatch({ type: GET_RECIPES, payload: apiData.data });
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
    console.log(data);
    dispatch({ type: GET_RECIPE_ID, payload: data.data });
  };
};

// export { GET_USERS, GET_USER };
