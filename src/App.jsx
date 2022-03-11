import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Barra Nav/Nav";
import Home from "./Componentes/Barra Nav/Home";
import Contactos from "./Componentes/Barra Nav/Contactos";
import Productos from "./Componentes/Barra Nav/Productos";
import Subs from "./Componentes/subscriptions/subscription";
import Contacto from "./Componentes/Contacto/Contacto";
import Producto from "./Componentes/Producto/Producto";
import Footer from "./Componentes/footer/footer";
import Banner from "./Componentes/Banner/Banner";
import Catalogo from "./Componentes/Catalogo/Catalogo";

function App() {
  const [showsub, setShowsub] = useState(true);

  const handleClose = () => {
    setShowsub(false);
    window.localStorage.setItem("modalState", true);
  };

  let stateModal = window.localStorage.getItem("modalState");

  return (
    <>
      <BrowserRouter>
        {console.log(showsub)}
        {!stateModal ? (
          <Subs show={showsub} handleClose={handleClose} />
        ) : (
          <></>
        )}
        <Nav />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Productos" element={<Productos />}></Route>
          <Route exact path="/Contactos" element={<Contactos />}></Route>
        </Routes>
        <Catalogo/>
        <Banner/>
        <Producto/>
        <Contacto/>
        <Footer/>
      </BrowserRouter>
      </>

);
}

export default App;
