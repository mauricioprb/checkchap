import React from "react";

const ChecklistInput = ({
  novoItemTexto,
  editandoNovoItem,
  handleInputChange,
  handleInputKeyDown,
  handleNovoItemFoco,
  handleNovoItemBlur,
}) => {
  return (
    <div className="checklist-input">
      {editandoNovoItem ? (
        <input
          type="text"
          value={novoItemTexto}
          placeholder="Adicionar item"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleNovoItemBlur}
          autoFocus
        />
      ) : (
        <p onClick={handleNovoItemFoco}>Adicionar item</p>
      )}
    </div>
  );
};

export default ChecklistInput;
