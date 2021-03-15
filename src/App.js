import React from "react";
import Componente from "./componente";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Componente
        onClick1={num => console.log(`mi componente me dio un click ${num}`)}
      />

      <h2>Listo</h2>
    </div>
  );
}

export default App;
