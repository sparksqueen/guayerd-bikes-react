import React from "react"
import {Link} from "react-router-dom"
import { Navbar } from 'react-bootstrap';

const Catalogo=() =>{
    return(
   
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"#"} >Catálogo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"#"} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modelos
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item" to={"#"}>Emperor 56 BeQuick</Link></li>
            <li><Link clasName="dropdown-item" to={"#"}>Urbana Crossway 40</Link></li>
            <li><Link className="dropdown-item" to={"#"}>Dtox 75 Perfect Ride</Link></li>
            <li><Link className="dropdown-item" to={"#"}>Tideup Cow 35</Link></li>
            <li><Link className="dropdown-item" to={"#"}>Silver Surfer PRO</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
   ) 
}

export default Catalogo;