import style from "./Recipe.module.css"

const Recipe = (props) =>{

    return(
        <div className={style.containerRecipe} >
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            {/* <p>Diets: {props.diets}</p> */}
            
        </div>
    );
}

export default Recipe;