import react from "react";
import { Link } from "react-router-dom";

function Nav() {
  let Usuario = JSON.parse(window.localStorage.getItem("datasub"));
  return (
    <>
      <div>
        {!Usuario ? <> </> : <p>Hola {Usuario.nombre}</p>}

        <nav>
          <Link to={"./Home"}> Home </Link>
          <Link to={"./Productos"}> Productos </Link>
          <Link to={"./Contactos"}> Contactos </Link>
        </nav>
      </div>
    </>
  );
}
export default Nav;
