import Recipes from "../../Components/Recipes/Recipes";
import { getRecipes, getRecipesName } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/Navbar/NavBar";

const Home = (props) => {
  const dispatch = useDispatch();
  // const recipesName = useSelector(state=>state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const [value, setValue] = useState({
    input: "",
    button: "",
  });

  const finder = (event) => {
    setValue({
      ...value,
      input: event.target.value,
    });
  };

  const buscar = (event) => {
    setValue({
      ...value,
      input: "",
    });
    console.log(event.target.value);
  };

  return (
    <div>
      <NavBar finder={finder} buscar={buscar} value={value.input} />
      <h1>{value.button}</h1>
      <Recipes />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     recipes: state.recipes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getRecipesName: (receta) => dispatch(getRecipesName(receta)),
//   };
// };

export default Home;
