import React from "react";

const Botao = ({ texto, onClick }) => {
  return (
    <button className="botao fonte-semibold-m" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botao;
