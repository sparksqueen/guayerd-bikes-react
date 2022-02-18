import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Barra Nav/Nav";
import Home from "./Componentes/Barra Nav/Home";
import Contactos from "./Componentes/Barra Nav/Contactos";
import Productos from "./Componentes/Barra Nav/Productos";
import Contacto from "./Componentes/Contacto/Contacto";
import Footer from "./Componentes/footer/footer";
/*import Maps from "./Componentes/Maps/Maps";*/



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Productos" element={<Productos />}></Route>
          <Route exact path="/Contactos" element={<Contactos />}></Route>
        </Routes>
        <Contacto/>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
