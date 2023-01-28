import { useSelector } from "react-redux";
import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterRecipes } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const dietas = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.recipes);

  const handlerDiets = (event) => {
    const diet = event.target.value;
    const resultado = [];
    let find = "";

    for (let index of allRecipes) {
      find = index.diets.find((element) => element === diet);

      if (find) resultado.push(index);
      find = "";
    }
    dispatch(filterRecipes(resultado));
  };

  return (
    <div className={style.containerFilter}>
      <div className={style.containerDiets}>
        {dietas.map((diet) => {
          return (
            <button
              key={diet.id}
              className={style.diets}
              onClick={handlerDiets}
              value={diet.name}
            >
              {diet.name.charAt(0).toUpperCase() + diet.name.slice(1)}
            </button>
          );
        })}
      </div>
      <div>
        <h1>aqui van los ordenado</h1>
      </div>
    </div>
  );
};

export default Filter;
