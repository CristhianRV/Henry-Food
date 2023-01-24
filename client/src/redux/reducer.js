import { GET_RECIPES } from "./actions";
import { GET_RECIPES_NAME } from "./actions";

const initialState = {
  recipes: [],
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

    default:
      return { ...state };
  }
};

export default rootReducer;
