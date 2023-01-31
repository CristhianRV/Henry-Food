import { useSelector } from "react-redux";
import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterRecipes } from "../../redux/actions";
import { recipesOrder } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.recipes);

  const handlerDiets = (event) => {
    const diet = event.target.value;
    const resultado = [];
    let find = "";
    //todas la recetas
    if (event.target.value === "all") {
      dispatch(filterRecipes(allRecipes));
      return;
    }

    //Filtrar por value

    for (let index of allRecipes) {
      if (index.Diets) {
        find = index.Diets?.find((element) => element.name === diet);
        find && resultado.push(index);
        find = "";
      }
      if (index.diets) {
        find = index.diets?.find((element) => element === diet);

        find && resultado.push(index);
        find = "";
      }
    }

    dispatch(filterRecipes(resultado));
  };

  const handlerSelect = () => {
    dispatch(recipesOrder());
  };

  return (
    <div className={style.containerFilter}>
      <div className={style.containerDiets}>
        <h1 className={style.labelDiets}>SELECT TYPES OF DIETS</h1>
        <button className={style.diets} onClick={handlerDiets} value="all">
          All Recipes
        </button>
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
      <div className={style.contSearch}>
        <h3 className={style.labelOrder}>Select Ordering</h3>
        <select className={style.items} onChange={handlerSelect}>
          <option className={style.item} value={true}>
            Falling
          </option>
          <option className={style.item} value={false}>
            Upward
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
