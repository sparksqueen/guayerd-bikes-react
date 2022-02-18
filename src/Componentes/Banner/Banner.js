import React from "react"
import {Link} from "react-router-dom"

const Banner=() =>{


    return (
      <div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" he>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./banner-1.jpg" className="d-block w-100 h-60" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./banner-2.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./banner-3.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
                <h2 className="text-center pt-4">Productos destacados </h2>
                <p  className="text-center pb-4">Algunas de nuestras ofertas disponibles</p>
            </div>
    )
  
}

export default Banner;