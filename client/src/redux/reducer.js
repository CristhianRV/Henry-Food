import bdd from ".././utils/bdd";

const initialState = {
  recipes: bdd,
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
