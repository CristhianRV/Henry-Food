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
    axios
      .post("/recipes", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <div className={style.containerForm}>
      <Link to="/home">
        <button>x</button>
      </Link>
      <form onSubmit={handleForm}>
        <div>
          <label>Name:</label>
          <input
            className={form.name ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.name}
            name="name"
          ></input>
        </div>
        <div>
          <label>Description: </label>
          <input
            className={form.description ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.description}
            name="description"
          ></input>
        </div>
        <div>
          <label>Health Score: </label>
          <input
            className={form.healthScore ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.healthScore}
            name="healthScore"
          ></input>
        </div>
        <div>
          <label>Preparation: </label>
          <input
            className={form.preparation ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.preparation}
            name="preparation"
          ></input>
        </div>
        <div>
          <label>Types Diets: </label>
          <input
            className={form.diets ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.diets}
            name="diets"
          ></input>
        </div>

        <div>
          <label>Image (url): </label>
          <input
            className={form.image ? style.great : style.failed}
            type="text"
            onChange={handleChange}
            value={form.image}
            name="image"
          ></input>
        </div>
        <button>CREATE</button>
      </form>
    </div>
  );
};

export default Form;
