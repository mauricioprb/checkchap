import React, { useState } from "react";

const PaginaChecklists = () => {
  const [itensChecklist, setItensChecklist] = useState([]);
  const [novoItemTexto, setNovoItemTexto] = useState("");
  const [indiceEdicao, setIndiceEdicao] = useState(-1);
  const [titulo, setTitulo] = useState("");
  const [indiceEdicaoTitulo, setIndiceEdicaoTitulo] = useState(-1);
  const [editandoNovoItem, setEditandoNovoItem] = useState(false);

  const handleInputChange = (e) => {
    setNovoItemTexto(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && novoItemTexto.trim() !== "") {
      setItensChecklist((itensAnteriores) => [
        ...itensAnteriores,
        { texto: novoItemTexto, marcado: false },
      ]);
      setNovoItemTexto("");
    }
  };

  const handleCheckboxChange = (indice) => {
    setItensChecklist((itensAnteriores) => {
      const itensAtualizados = [...itensAnteriores];
      itensAtualizados[indice].marcado = !itensAtualizados[indice].marcado;
      return itensAtualizados;
    });
  };

  const handleTextoClique = (indice) => {
    setIndiceEdicao(indice);
  };

  const handleTextoBlur = () => {
    setIndiceEdicao(-1);
  };

  const handleTextoChange = (e, indice) => {
    const itensAtualizados = [...itensChecklist];
    itensAtualizados[indice].texto = e.target.value;
    setItensChecklist(itensAtualizados);
  };

  const handleTituloClique = () => {
    setIndiceEdicaoTitulo(0);
  };

  const handleTituloBlur = () => {
    setIndiceEdicaoTitulo(-1);
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleNovoItemFoco = () => {
    setEditandoNovoItem(true);
  };

  const handleNovoItemBlur = () => {
    setEditandoNovoItem(false);
  };

  return (
    <div
      style={{
        maxWidth: "546px",
        padding: "48px",
      }}
    >
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
          <li key={indice}>
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
              <span onClick={() => handleTextoClique(indice)}>
                {item.texto}
              </span>
            )}
          </li>
        ))}
      </ul>

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

export default PaginaChecklists;
