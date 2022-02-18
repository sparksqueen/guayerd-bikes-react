import React from 'react'
import {Link} from "react-router-dom"
import "./contacto.css";

const Contacto = () => {
  return (
      
    <div className='container'>
        <h2 className='pt-4'>Contacto</h2>
       <div className="contacto row justify-content-center py-4 px-4">
           
             <form class="row g-3">
             <div class="row">
                <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="José" aria-label="First name"/>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                    <input type="text" class="form-control" placeholder="Perez" aria-label="Last name"/>
                </div>
                </div>
             <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Email</label>
                     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" class="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <select class="form-select" aria-label="Default select example">
                        <option selected>Sector</option>
                        <option value="1">Venta</option>
                        <option value="2">Administracion</option>
                        <option value="3">Compras</option>
                        </select>
                <div class="mb-3">
                     <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form>
                </div>
    </div>
  )
}

export default Contacto;