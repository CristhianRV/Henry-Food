// CONSTANTE DE LAS ACTIONS
import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";

// const GET_USER = "GET_USER";

export const getRecipes = (receta) => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/recipes");
    dispatch({ type: GET_RECIPES, payload: apiData.data });
  };
};

export const getRecipesName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/recipes?name=${name}`
    );
    dispatch({ type: GET_RECIPES_NAME, payload: apiData.data });
  };
};

// export { GET_USERS, GET_USER };
