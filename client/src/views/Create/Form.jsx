import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Form.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  //estados del formulario
  const allDiets = useSelector((state) => state.diets);
  const [form, setForm] = useState({
    name: "",
    description: "",
    healthScore: 0,
    preparation: "",
    diets: [],
    image: "",
  });
  //estados de los check
  const [dietas, setDiets] = useState({
    "gluten free": false,
    paleolithic: false,
    vegetarian: false,
    "lacto ovo vegetarian": false,
    vegan: false,
    pescatarian: false,
    primal: false,
    "whole 30": false,
    "fodmap friendly": false,
    dairyFree: false,
  });

  //Estado para agregar las propiedades que se enviarán

  const handleChange = (event) => {
    setForm({
      ...form,
      name: "",
      description: "",
    });

    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  //Comprobando que recetas se ingresaran

  const handlerCheck = (event) => {
    const value = event.target.value;
    setDiets({ ...dietas, [value]: !dietas[value] });
    form.diets.includes(value)
      ? setForm({
          ...form,
          diets: form.diets.filter((element) => element !== value),
        })
      : setForm({
          ...form,
          diets: [...form.diets, value],
        });
  };

  const handleForm = async (event) => {
    event.preventDefault();
    if (!form.name) delete form.name;
    if (!form.description) delete form.description;
    axios
      .post("/recipes", form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err.response.data.error));
    //clean form
    setForm({
      ...form,
      name: "",
      description: "",
      healthScore: 0,
      preparation: "",
      diets: [],
      image: "",
    });

    setDiets({
      ...dietas,
      "gluten free": false,
      paleolithic: false,
      vegetarian: false,
      "lacto ovo vegetarian": false,
      vegan: false,
      pescatarian: false,
      primal: false,
      "whole 30": false,
      "fodmap friendly": false,
      dairyFree: false,
    });
  };

  return (
    <div className={style.containerForm}>
      <div>
        {/* boton para volver al home */}

        <Link to="/home">
          <div className={style.btnRetroceder}></div>
        </Link>

        {/* FORMULARIO */}
      </div>
      <div className={style.contForm}>
        <p className={style.titulo}>Crea tu propia receta!</p>
        <form onSubmit={handleForm} className={style.form}>
          <div className={style.info}>
            <label className={style.label}>Name</label>
            <input
              className={form.name ? style.great : style.failed}
              type="text"
              onChange={handleChange}
              value={form.name}
              name="name"
            ></input>
          </div>
          <div className={style.info}>
            <label className={style.label}>Description </label>
            <textarea
              className={form.description ? style.greatArea : style.failedArea}
              onChange={handleChange}
              value={form.description}
              name="description"
            ></textarea>
          </div>
          <div className={style.info}>
            <label className={style.label}>Health Score </label>
            <input
              className={style.intRange}
              onChange={handleChange}
              value={form.healthScore}
              name="healthScore"
              min="0"
              max="100"
              type="range"
            />
            <span className={style.healthScore}>{form.healthScore}</span>
          </div>
          <div className={style.info}>
            <label className={style.label}>Preparation </label>
            <textarea
              className={form.preparation ? style.greatArea : style.failedArea}
              onChange={handleChange}
              value={form.preparation}
              name="preparation"
            ></textarea>
          </div>
          <div className={style.info}>
            <label className={style.label}>Types Diets </label>
            <div className={style.checkBoxFather}>
              {allDiets.map((element) => {
                return (
                  <div className={style.checkBox} key={element.id}>
                    <input
                      type="checkbox"
                      name="diets"
                      value={element.name}
                      onChange={handlerCheck}
                      checked={dietas[element.name]}
                    />
                    {element.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.info}>
            <label className={style.label}>Image (url) </label>
            <input
              className={form.image ? style.great : style.failed}
              type="text"
              onChange={handleChange}
              value={form.image}
              name="image"
            ></input>
          </div>
          <button className={style.btnForm}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
