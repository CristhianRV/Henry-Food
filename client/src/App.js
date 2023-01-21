import './App.css';
import { Route, useLocation } from "react-router-dom";
import {Landing, Home, Detail, Form} from "./views";
import NavBar from "./Components/Navbar/NavBar";


function App() {

  const location  = useLocation();


  return (
    <div className="App">
        {location.pathname !== '/' && <NavBar /> }
       <Route exact path='/'  component={Landing} />
       <Route path='/home'  render={()=><Home/>} />
       <Route path='/detail'  render={()=><Detail/>} />
       <Route path='/create'  render={()=><Form/>} />
    
    
    
    </div>
  );
}

export default App;
