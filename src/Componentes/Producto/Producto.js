import React from "react";

import { Link } from "react-router-dom";

const Producto = () => {
  return (
    <div className="container ">
      <div className="row d-flex  justify-content-evenly ">
        <div className="card col-sm-4 ">
          <img src="./Bici-1.png" class="card-img-top" alt="logo" />
          <div lassName="card-body px-5">
            <h5 lassName="card-title">Emperor 56 BeQuick</h5>
            <p lassName="card-text">
              Bicicleta de competición hecha a medida con lo mejor, cuadro
              francés Huret talle 'M'cambios y mecánica Shimano (shifters,
              descarriladores), frenos Weinmann...
            </p>
            <Link to={"#"} class="card-link">
              Ver Más{" "}
            </Link>
          </div>
        </div>

        <div className="card col-sm-4 ">
          <img src="./Bici-2.png" class="card-img-top" alt="logo" />
          <div lassName="card-body">
            <h5 lassName="card-title">Urbana Crossway 40</h5>
            <p lassName="card-text">
              Bicicleta de competición hecha a medida con lo mejor, cuadro
              francés Huret talle 'M' cambios y mecánica Shimano (shifters,
              descarriladores), frenos Weinmann...
            </p>
            <Link to={"#"} class="card-link">
              Ver Más{" "}
            </Link>
          </div>
        </div>

        <div className="card col-sm-4 ">
          <img src="./Bici-3.png" class="card-img-top" alt="logo" />
          <div lassName="card-body">
            <h5 lassName="card-title">Dtox 75 Perfect Ride</h5>
            <p lassName="card-text">
              Bicicleta de competición hecha a medida con lo mejor, cuadro
              francés Huret talle 'M' cambios y mecánica Shimano (shifters,
              descarriladores), frenos Weinmann...
            </p>
            <Link to={"#"} class="card-link">
              Ver Más{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
