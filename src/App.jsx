import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Barra Nav/Nav";
import Home from "./Componentes/Barra Nav/Home";
import Contactos from "./Componentes/Barra Nav/Contactos";
import Productos from "./Componentes/Barra Nav/Productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Productos" element={<Productos />}></Route>
          <Route exact path="/Contactos" element={<Contactos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
