import React from "react"
import {Link} from "react-router-dom"

const Footer=() =>{
   
    return(

        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row  d-flex align-items-center justify-content: space-between">
                        <Link to="/" className="col-12 col-md-3 d-flex aling-items-center ">
                             <img src="./LogoIcono.png" width="50"  alt="logo"/>
                        </Link>
                        <ul className="col-12 col-md-4 list-unstyled">
                            <li> Sobre Nosotros</li>
                            <li  className=" "> Garantias</li>
                            <li  className=""> Politica de Privacidad</li>
                        </ul>
                        <ul className="col-12 col-md-4 ">
                            <i className="bi bi-facebook px-3"></i>
                            <i className="bi bi-instagram px-3 "></i>
                            <i className="bi bi-tiktok px-3"></i>
                            
                        </ul>

                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;