import Recipe from "../Recipe/Recipe";
import style from "./Recipes.module.css";
import React, { Component } from "react";

class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.containerRecipes}>
        {this.props.recipes.map((recipe) => {
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
  }
}

export default Recipes;
