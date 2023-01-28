import Recipes from "../../Components/Recipes/Recipes";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import Filter from "../../Components/Filter/Filter";
import style from "./Home.module.css";

const Home = () => {
  const allRe = useSelector((state) => state.recipesFilters);
  const ordered = useSelector((state) => state.ordered);

  //Para odenar de manera ascendente/descente
  const allRecipes = ordered
    ? allRe.sort((x, y) => x.name.localeCompare(y.name))
    : allRe.reverse((x, y) => x.name.localeCompare(y.name));

  //Para el paginado
  const [current, setCurrent] = useState(1);
  const recetas = allRecipes?.slice((current - 1) * 9, current * 9);

  //Controles del paginado
  const handlerNext = () => {
    const large = allRecipes.length;
    const Pagination = Math.ceil(large / 9);
    if (current === Pagination) return;
    setCurrent(current + 1);
  };

  const handlerPre = () => {
    if (current === 1) return;
    setCurrent(current - 1);
  };

  return (
    <div>
      <div className={style.containerRecipes}>
        <div>
          <Filter />
        </div>
        <div>
          <Recipes recipes={recetas} />
          <Pagination handlerNext={handlerNext} handlerPre={handlerPre} />
        </div>
      </div>
    </div>
  );
};

export default Home;
