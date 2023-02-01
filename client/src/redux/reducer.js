import {
  GET_RECIPES,
  GET_RECIPES_NAME,
  GET_RECIPE_ID,
  GET_DIETS,
  GET_FILTER,
  ORDERED_RECIPES,
  GET_LOADING,
} from "./actions";

const initialState = {
  recipes: [],
  recipesFilters: [],
  diets: [],
  recipe: {},
  ordered: true,
  loading: false,
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: actions.payload,
        recipesFilters: actions.payload,
        diets: actions.data,
      };

    case GET_RECIPES_NAME:
      const receta = actions.payload;
      return {
        ...state,
        recipesFilters: [...receta],
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipe: actions.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: actions.payload,
      };

    case GET_FILTER:
      return {
        ...state,
        recipesFilters: actions.payload,
      };
    case ORDERED_RECIPES:
      return {
        ...state,
        ordered: !state.ordered,
      };

    case GET_LOADING:
      return {
        ...state,
        loading: actions.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
