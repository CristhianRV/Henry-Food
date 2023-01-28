import style from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={style.container}>
      <div>
        <button onClick={props.handlerNext}>⋙</button>
      </div>
      <div>
        <button onClick={props.handlerPre}>⋘</button>
      </div>
    </div>
  );
};

export default Pagination;
