import React from 'react'
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom"

const Producto = () => {
  return (


<div className="container ">

    <div className="row d-flex  justify-content-evenly " >

      <div className="card col-sm-4 ">
        <img src="./Bici-1.png" className="card-img-top"  alt="logo" />
          <div className="card-body px-5">
            <h5 className="card-title">Emperor 56 BeQuick</h5>
            <p className="card-text">Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M'cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann...</p>
            <Link to={"#"}className="card-link">Ver Más </Link>
         </div> 
      </div>

      <div className="card col-sm-4 ">
        <img src="./Bici-2.png" className="card-img-top"  alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Urbana Crossway 40</h5>
            <p className="card-text">Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M' cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann...</p>
            <Link to={"#"}className="card-link">Ver Más </Link>
         </div> 
      </div>

      <div className="card col-sm-4 ">
        <img src="./Bici-3.png" className="card-img-top"  alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Dtox 75 Perfect Ride</h5>
            <p className="card-text">Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M' cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann...</p>
            <Link to={"#"}className="card-link">Ver Más </Link>
         </div> 
      </div>

    </div>

</div>

  )
}

export default Producto;