import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeId(id));
  }, [id]);

  const recipe = useSelector((state) => state.recipe);
  const description = recipe.description
    ? recipe.description.replace(/<[^>]*>?/g, "")
    : undefined;
  const preparation = recipe.preparation
    ? recipe.preparation.replace(/<[^>]*>?/g, "")
    : undefined;

  return (
    <div className={style.container}>
      <div>
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className={style.containerText}>
        <h1 className={style.titulo}>{recipe.name}</h1>
        <p>{description}</p>
        <p>{recipe.healthScore}</p>
        <p>{preparation}</p>
      </div>
    </div>
  );
};

export default Detail;
