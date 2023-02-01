import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.titulo}>Henry | FOOD</h1>
      <div className={style.containerText}>
        <p className={style.texto}>
          Conoce y disfruta de miles de recetas a solo un
          <span className={style.texto2}> click! </span>
          <span className={style.texto2}> Henre Food</span>
        </p>
      </div>
      <div className={style.containeringreso}>
        <Link to="home">
          <button className={style.button}>Star Now »</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
