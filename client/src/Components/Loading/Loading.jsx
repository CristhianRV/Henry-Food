import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <label className={style.image}></label>
      <div className={style.loader}></div>

      {/* <p className={style.message}>Cargando...</p> */}
    </div>
  );
};

export default Loading;
