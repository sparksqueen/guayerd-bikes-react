import react from "react";
import { Link } from "react-router-dom";



function Nav() {
  return (
    <>

      <div>
      <nav>
              <ul className="nav bg-black   justify-content-center">
                <li className="nav-item">
                  <Link class="nav-link" to={"./Home"}> Home </Link>
                </li>
                <li className="nav-item">
                   <Link class="nav-link" to={"./Productos"}> Productos </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to={"./Contactos"}> Contactos </Link>
                </li>
             </ul>
        </nav>
      </div>
    </>
  );
}
export default Nav;
