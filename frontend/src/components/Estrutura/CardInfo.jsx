import React from "react";

const CardInfo = ({ titulo, texto }) => {
  return (
    <div className="card-info">
      <h3 className="titulo fonte-semibold-m">{titulo}</h3>
      <p className="texto fonte-regular-s">{texto}</p>
    </div>
  );
};

export default CardInfo;
