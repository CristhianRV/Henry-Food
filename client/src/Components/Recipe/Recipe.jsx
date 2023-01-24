import style from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={style.containerRecipe}>
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p> {props.diets}</p>
    </div>
  );
};

export default Recipe;
