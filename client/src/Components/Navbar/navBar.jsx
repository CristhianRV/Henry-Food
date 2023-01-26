import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    input: "",
    output: "",
  });

  const search = (event) => {
    const valueInt = event.target.value;
    setValue({
      ...value,
      input: valueInt,
    });
  };

  const handleSearch = (event) => {
    setValue({
      ...value,
      input: "",
      output: event.target.value,
    });
  };
  useEffect(() => {
    dispatch(getRecipesName(value.output));
  }, [value.output]);

  return (
    <nav className={style.container}>
      <h1 className={style.title1}>
        Henry<span className={style.title2}>FOOD</span>
      </h1>
      <div className={style.menus}>
        <Link to="/home" className={style.opciones}>
          <h3 className={style.opciones}>Home</h3>
        </Link>
        <Link to="/Create" className={style.opciones}>
          <h3>Create</h3>
        </Link>
      </div>

      <div className={style.containerSearch}>
        <div className={style.searchBar}>
          <input
            className={style.inputSearchBar}
            type="text"
            placeholder="Buscar"
            onChange={search}
            value={value.input}
          />
          <button onClick={handleSearch} value={value.input}>
            BUSCAR
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
