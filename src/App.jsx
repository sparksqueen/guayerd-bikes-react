import "./App.css";
import React from "react";

import Subs from "./Componentes/subscriptions/subscription";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Barra Nav/Nav";
import Home from "./Componentes/Barra Nav/Home";
import Contactos from "./Componentes/Barra Nav/Contactos";
import Productos from "./Componentes/Barra Nav/Productos";

import Footer from "./Componentes/footer/footer";

import Banner from "./Componentes/Banner/Banner";
import Producto from "./Componentes/Producto/Producto";
/*import Maps from "./Componentes/Maps/Maps";*/

function App() {
  return (
    <>
      <Subs />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Productos" element={<Productos />}></Route>
          <Route exact path="/Contactos" element={<Contactos />}></Route>
        </Routes>
        <Banner />
        <Producto />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
