import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../Formulario/Botao";
import CardInfo from "../Estrutura/CardInfo";
import Footer from "../Estrutura/Footer";

const PaginaPrincipal = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  const handleProsseguir = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const { url: checklistUrl, idUrl } = data;
        console.log("URL existente:", checklistUrl);
        navigate(`/${checklistUrl}`);
      } else {
        const response = await fetch("http://localhost:8080/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (response.ok) {
          const data = await response.json();
          const { url: checklistUrl, idUrl } = data;
          console.log("URL criada:", checklistUrl);
          navigate(`/${checklistUrl}`);
        } else {
          console.error("Falha ao criar a URL");
        }
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="layout">
      <div className="main">
        <div className="titulo">
          <h1 className="titulo-principal fonte-bold-xl">
            CHECK<span>CHAP</span>
          </h1>
          <h3 className="subtitulo fonte-bold-l">
            Crie checklists de forma <span>ágil e intuitiva.</span>
          </h3>
          <div className={"input-container"}>
            <div className={"tag-container"}>
              <span className={"fonte-semibold-m"}>checkchap.tech/</span>
            </div>
            <input
              className={"input fonte-regular-m"}
              type="text"
              placeholder="Link único para a página"
              value={url}
              onChange={handleUrlChange}
            />
            <Botao texto="Prosseguir" onClick={handleProsseguir} />
          </div>
        </div>
        <span className="divisor"></span>
        <div className="card-container">{/* Restante do código... */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;
