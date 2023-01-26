import Recipes from "../../Components/Recipes/Recipes";
import { getRecipes } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import NavBar from "../../Components/Navbar/NavBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      {/* <NavBar /> */}
      <Recipes />
    </div>
  );
};

export default Home;
