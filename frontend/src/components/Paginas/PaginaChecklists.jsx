import React, { useEffect } from "react";
import ChecklistItem from "../Formulario/ChecklistItem";
import ChecklistInput from "../Formulario/ChecklistInput";
import { useChecklist } from "../../Hooks/useChecklist";

const PaginaChecklists = () => {
  const {
    itensChecklist,
    novoItemTexto,
    indiceEdicao,
    titulo,
    indiceEdicaoTitulo,
    editandoNovoItem,
    handleInputChange,
    handleInputKeyDown,
    handleCheckboxChange,
    handleTextoClique,
    handleTextoBlur,
    handleTextoChange,
    handleTituloClique,
    handleTituloBlur,
    handleTituloChange,
    handleNovoItemFoco,
    handleNovoItemBlur,
    handlePostTitulo,
  } = useChecklist();

  useEffect(() => {
    const salvarTitulo = async () => {
      try {
        await handlePostTitulo(titulo);
      } catch (error) {
        console.error("API request failed:", error);
      }
    };

    if (indiceEdicaoTitulo === 0 && titulo !== "") {
      salvarTitulo();
    }
  }, [handlePostTitulo, indiceEdicaoTitulo, titulo]);

  return (
    <div className="pagina-checklists">
      {indiceEdicaoTitulo === 0 ? (
        <input
          type="text"
          value={titulo}
          placeholder="Defina um título"
          onBlur={handleTituloBlur}
          onChange={handleTituloChange}
          autoFocus
        />
      ) : (
        <h1 onClick={handleTituloClique}>{titulo || "Defina um título"}</h1>
      )}

      <ul>
        {itensChecklist.map((item, indice) => (
          <ChecklistItem
            key={indice}
            item={item}
            indice={indice}
            indiceEdicao={indiceEdicao}
            handleCheckboxChange={handleCheckboxChange}
            handleTextoClique={handleTextoClique}
            handleTextoBlur={handleTextoBlur}
            handleTextoChange={handleTextoChange}
          />
        ))}
      </ul>

      <ChecklistInput
        novoItemTexto={novoItemTexto}
        editandoNovoItem={editandoNovoItem}
        handleInputChange={handleInputChange}
        handleInputKeyDown={handleInputKeyDown}
        handleNovoItemFoco={handleNovoItemFoco}
        handleNovoItemBlur={handleNovoItemBlur}
      />
    </div>
  );
};

export default PaginaChecklists;
