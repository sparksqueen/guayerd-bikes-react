import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./subscription.css";
function Subs(props) {
  // const [show, setShow] = useState(false);
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });

  // let closesub = window.localStorage.setItem("modalState", false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleOnchange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarData = (e) => {
    e.preventDefault();
    props.handleClose();
    window.localStorage.setItem("datasub", JSON.stringify(data));
    console.log(data.nombre + " " + data.email);
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>QUIERES ADQUIRIR LA SUSCRIPCIÓN</Modal.Title>
        </Modal.Header>
        <Modal.Body className="sup21">
          <form class="row g-3 needs-validation" onSubmit={enviarData}>
            <div class="row">
              <div class="col-md-6">
                <p>Nombre</p>

                <input
                  type="text"
                  name="nombre"
                  placeholder="fulanito"
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div class="mb-3">
              <p>Email</p>
              <input
                onChange={handleOnchange}
                type="email"
                name="email"
                placeholder="fulanito@hotmail.com"
              />
            </div>
            <button style={{ width: "30%" }} type="submit">
              Enviar
            </button>
          </form>
          {/*   <div>
            <p>Nombre</p>
          </div>
          <div>
            <p>Email</p>
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Subs;
