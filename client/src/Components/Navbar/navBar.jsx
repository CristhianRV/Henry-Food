import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
const NavBar= ()=>{

    return(
        <div className={style.container} >
            <Link to="/home" className={style.opciones} >Home</Link>
            <Link to="/Create" className={style.opciones} >Create</Link>
        </div>
    )
}

export default NavBar;