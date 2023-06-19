import { useState } from "react";

export const useChecklist = () => {
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

  return {
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
  };
};
