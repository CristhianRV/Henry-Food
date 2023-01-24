import Recipe from "../Recipe/Recipe";
import style from "./Recipes.module.css";
import { connect } from "react-redux";

const Recipes = (props) => {
  return (
    <div className={style.containerRecipes}>
      {props.recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            healtScore={recipe.healthScore}
            diets={recipe.diets}
            image={recipe.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(Recipes);
