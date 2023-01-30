import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    healthScore: 0,
    preparation: "",
    diets: "",
    image: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();
    if (!form.name) delete form.name;
    if (!form.description) delete form.description;
    console.log(form);
    // axios
    //   .post("/recipes", form)
    //   .then((res) => alert(res.data))
    //   .catch((err) => alert(err.message));
    // //clean form
    // setForm({
    //   ...form,
    //   name: "",
    //   description: "",
    //   healthScore: 0,
    //   preparation: "",
    //   diets: "",
    //   image: "",
    // });
  };

  return (
    <div className={style.containerForm}>
      <div>
        <Link to="/home">
          <div className={style.btnRetroceder}></div>
        </Link>
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
              className={form.healthScore ? style.great : style.failed}
              type="number"
              onChange={handleChange}
              value={form.healthScore}
              name="healthScore"

              // className={style.intRange}
              // type="range"
              // min="0"
              // max="100"
            ></input>
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
            <select
              name="diets"
              className={style.select}
              onChange={handleChange}
            >
              <option value="dairyFree" type="checkbox">
                DairyFree{" "}
              </option>
              <option value="paleolithic" type="checkbox">
                Paleolithic
              </option>
              <option value="vegan" type="checkbox">
                Vegan
              </option>
              <option value="whole 30" type="checkbox">
                Whole 30
              </option>
              <option value="pescatarian" type="checkbox">
                Pescatarian
              </option>
              <option value="lacto ovo vegetarian" type="checkbox">
                Lacto ovo vegetarian
              </option>
              <option value="gluten free" type="checkbox">
                Gluten Free
              </option>
              <option value="vegetarian" type="checkbox">
                Vegetarian
              </option>
              <option value="fodmap friendly" type="checkbox">
                Fodmap Friendly
              </option>
              <option value="primal" type="checkbox">
                Primal
              </option>
            </select>
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
