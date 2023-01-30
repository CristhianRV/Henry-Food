import style from "./Pagination.module.css";
import { useSelector } from "react-redux";

const Pagination = (props) => {
  const allRecipes = useSelector((state) => state.recipesFilters);

  // const [paginado, setPaginado] = useState([]);

  const numPag = Math.ceil(allRecipes.length / 9); //12
  const buttonPage = [];
  let pagina = props.current;
  while (pagina <= numPag && buttonPage.length < 5) {
    // buttonPage.push(pagina);
    buttonPage.push(pagina);
    pagina += 1;
  }

  return (
    <div className={style.container}>
      <div>
        <button className={style.handler} onClick={props.handlerPre}>
          ⋘
        </button>
      </div>
      {buttonPage.map((element) => {
        return (
          <div key={element}>
            <button
              className={element === props.current ? style.good : style.bad}
              onClick={props.secPage}
              value={element}
            >
              {element}
            </button>
          </div>
        );
      })}

      <div>
        <button className={style.handler} onClick={props.handlerNext}>
          ⋙
        </button>
      </div>
    </div>
  );
};

export default Pagination;
