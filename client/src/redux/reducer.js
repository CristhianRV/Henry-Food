import { GET_RECIPES, GET_RECIPES_NAME, GET_RECIPE_ID } from "./actions";

const initialState = {
  recipes: [],
  recipe: {},
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: actions.payload,
      };

    case GET_RECIPES_NAME:
      return {
        ...state,
        recipes: actions.payload,
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipe: actions.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
