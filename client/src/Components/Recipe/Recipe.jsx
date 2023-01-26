import style from "./Recipe.module.css";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <div className={style.containerRecipe}>
      <Link to={`detail/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <h4>{props.name}</h4>
      <p> {props.diets}</p>
    </div>
  );
};

export default Recipe;
