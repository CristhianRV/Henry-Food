// import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = (props) => {
  // const [recetas, setRecetas] = useState("");

  return (
    <nav className={style.container}>
      <h1>
        Henry<span>FOOD</span>
      </h1>
      <div className={style.menus}>
        <Link to="/home" className={style.opciones}>
          <h3>Home</h3>
        </Link>
        <Link to="/Create" className={style.opciones}>
          <h3>Create</h3>
        </Link>
      </div>

      <div className={style.containerSearch}>
        <div className={style.searchBar}>
          <input
            type="text"
            placeholder="Buscar"
            onChange={props.finder}
            value={props.value}
          />
          <button onClick={props.buscar} value={props.value}>
            BUSCAR
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
