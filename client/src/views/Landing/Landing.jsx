import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1 className={style.titulo}>
          Henry<span>FOOD</span>
        </h1>
      </div>
      <div className={style.containeringreso}>
        <div className={style.panel}>
          <Link to="home">
            <button className={style.button}>INGRESAR</button>
          </Link>
        </div>
      </div>

      <div className={style.containerText}>
        <p className={style.texto}>
          Conoce y disfruta de miles de recetas a solo un click!
        </p>
      </div>
    </div>
  );
};

export default Landing;
