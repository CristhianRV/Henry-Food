import bdd from "../../utils/bdd";
import Recipe from "../Recipe/Recipe";
import style from "./Recipes.module.css"

const Recipes= ()=>{

    return(
        <div className={style.containerRecipes} >
            {bdd.map((recipe)=>{
                return(
                    <Recipe 
                        name={recipe.name}
                        description={recipe.description}
                        healtScore={recipe.healthScore}
                        diets={recipe.diets}
                        image={recipe.image}

                    />
                )
            })}
        </div>
    );
}

export default Recipes;