import react from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
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
