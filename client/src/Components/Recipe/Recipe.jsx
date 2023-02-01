import style from "./Recipe.module.css";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <div className={style.containerRecipe}>
      <Link to={`detail/${props.id}`}>
        <img className={style.image} src={props.image} alt={props.name} />
      </Link>
      <h4 className={style.name}>{props.name}</h4>
      <div className={style.allDiets}>
        {props.diets.map((diet) => {
          return (
            <p key={diet.name ? diet.name : diet} className={style.diets}>
              {diet.name ? diet.name : diet}
            </p>
          );
        })}
      </div>
      {/* <p className={style.diets}> {props.diets}</p> */}
    </div>
  );
};

export default Recipe;
