import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId, getLoading } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoading(true));
    dispatch(getRecipeId(id)).then(() => dispatch(getLoading(false)));
  }, [id]);

  const recipe = useSelector((state) => state.recipe);
  const description = recipe.description
    ? recipe.description.replace(/<[^>]*>?/g, "")
    : undefined;
  const preparation = recipe.preparation
    ? recipe.preparation.replace(/<[^>]*>?/g, "")
    : undefined;

  return (
    <div className={style.containerDetail}>
      <Link to="/home">
        <div className={style.btnRetroceder}></div>
      </Link>
      <div className={style.container}>
        <div className={style.contImage}>
          <img className={style.image} src={recipe.image} alt={recipe.name} />
        </div>
        <div className={style.containerText}>
          <h1 className={style.titulo}>{recipe.name}</h1>
          <p className={style.parraLargo}>{description}</p>
          <p
            className={style.parraCorto}
          >{`${recipe.healthScore}% Health Score`}</p>
          <p className={style.parraLargo}>{preparation}</p>
          <div className={style.contDiets}>
            {recipe.diets?.map((diet) => {
              return (
                <p className={style.dietas} key={diet}>
                  {diet}
                </p>
              );
            })}
          </div>
          <div className={style.contDiets}>
            {recipe.Diets?.map((diet) => {
              return (
                <p className={style.dietas} key={diet.name}>
                  {diet.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
