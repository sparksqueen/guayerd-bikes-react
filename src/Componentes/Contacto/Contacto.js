import React from 'react'
import {Link} from "react-router-dom"
import "./contacto.css";


const Contacto = () => {
  return (
     <>
            <h2 className='pt-4 text-center'>Contacto</h2> 
                    <div id="contact-map" className="container-md">
                        <div className="contacto row justify-content-center py-4 px-4">
                                <form className="row g-3">
                                    <div className="row">
                                            <div className="col-md-6">
                                                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                                                <input type="text" className="form-control" placeholder="José" aria-label="First name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="exampleFormControlInput1" className="form-label">Apellido</label>
                                                <input type="text" className="form-control" placeholder="Perez" aria-label="Last name"/>
                                            </div>
                                    </div>
                                    <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
                                    </div>
                                    <div className="col-12">
                                                <label for="inputAddress" className="form-label">Dirección</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <select className="form-select" aria-label="Default select example">
                                                    <option selected>Sector</option>
                                                    <option value="1">Venta</option>
                                                    <option value="2">Administracion</option>
                                                    <option value="3">Compras</option>
                                    </select>
                                    <div className="mb-3">
                                                <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>
                                </form>
                        </div>

                        <div>
                            <iframe title="Maps" className="iframe py-4" src="https://maps.google.com/?ll=-34.59090788410966,-58.447912417588185&z=14&t=m&output=embed"
                                            width="600" 
                                            height="600" 
                                            allow=""    
                                            loading="lazy">
                            </iframe>  
                        </div>
                                
                    </div>
    </>
   
  )
}

export default Contacto;