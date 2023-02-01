import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form } from "./views";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./Components/Navbar/NavBar";
import { getRecipes } from "./redux/actions";
import { getLoading } from "./redux/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoading(true));
    dispatch(getRecipes()).then(() => dispatch(getLoading(false)));
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail/:id" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
