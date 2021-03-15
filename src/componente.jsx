import React, { useState, useEffect } from "react";

export const BotonContador = props => {
  const [click, setClick] = useState(0);
  const [date, setDate] = useState(null);

  const sumarClick = () => {
    setClick(click + 1);
    setDate(new Date().toString());
  };

  return (
    <div>
      <p>
        You clicked {click} times on {date}
      </p>

      <button onClick={sumarClick}>Contador de clicks</button>
      {props.children}
    </div>
  );
};

export default BotonContador;
