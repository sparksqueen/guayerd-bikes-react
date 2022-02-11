import "./App.css";
import React from "react";
import Home from "./Home";
import Productos from "./Productos";
import Contactos from "./Contactos";

function App() {
  return (
    <div>
      <nav>
        <a href="./Home.js"> Home </a>
        <a href="./Productos"> Productos </a>
        <a href="./Contactos">Contactos</a>
      </nav>
    </div>
  );
}

export default App;
