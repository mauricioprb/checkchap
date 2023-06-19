import React from "react";

const ChecklistItem = ({
  item,
  indice,
  indiceEdicao,
  handleCheckboxChange,
  handleTextoClique,
  handleTextoBlur,
  handleTextoChange,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.marcado}
        onChange={() => handleCheckboxChange(indice)}
      />
      {indiceEdicao === indice ? (
        <input
          type="text"
          value={item.texto}
          autoFocus
          onBlur={handleTextoBlur}
          onChange={(e) => handleTextoChange(e, indice)}
        />
      ) : (
        <span onClick={() => handleTextoClique(indice)}>{item.texto}</span>
      )}
    </li>
  );
};

export default ChecklistItem;
