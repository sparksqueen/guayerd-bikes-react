import React from "react";
import { Link } from "react-router-dom";
import "./contacto.css";

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const Contacto = () => {
  return (
    <div className="container">
      <h2 className="pt-4">Contacto</h2>
      <div className="contacto row justify-content-center py-4 px-4">
        <form class="row g-3 needs-validation" novalidate>
          <div class="row">
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Mario"
                required
              />
              <div class="valid-feedback">Bien!</div>
              <div class="invalid-feedback">
                Ningún campo obligatorio debe estar vacío.
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label">
                Apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Ruiz"
                required
              />
              <div class="valid-feedback">Bien!</div>
              <div class="invalid-feedback">
                Ningún campo obligatorio debe estar vacío.
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="validationDefaultUsername" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <input
                type="email"
                class="form-control"
                id="validationDefaultUsername"
                placeholder="name@ejemplo.com"
                required
              />
              <div class="invalid-feedback">
                Ningún campo obligatorio debe estar vacío.
              </div>
              <div class="invalid-feedback">
                El campo de email debe ser valido.
              </div>
            </div>
          </div>
          <div className="col-12">
            <label for="inputAddress" class="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Callao 2000"
              required
            />
            <div class="valid-feedback">Bien!</div>
            <div class="invalid-feedback">
              Ningún campo obligatorio debe estar vacío.
            </div>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Sector</option>
            <option value="1">Venta</option>
            <option value="2">Administracion</option>
            <option value="3">Compras</option>
          </select>
          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Mensaje
            </label>
            <textarea
              type="text"
              class="form-control"
              id="validationTextarea"
              placeholder="Escriba su mensaje aquí"
              required
            ></textarea>
          </div>
          <div class="invalid-feedback">
            El campo de comentarios debe tener más que 5 caracteres.
          </div>
          <div class="invalid-feedback">
            Ningún campo obligatorio debe estar vacío.
          </div>
          <div className="col-12">
            <button class="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
