import React from "react";
import Botao from "../Formulario/Botao";
import CardInfo from "../Estrutura/CardInfo";
import Footer from "../Estrutura/Footer";

const PaginaPrincipal = () => {
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
            />
            <Botao texto="Prosseguir" />
          </div>
        </div>
        <span className="divisor"></span>
        <div className="card-container">
          <CardInfo
            titulo="Sem Cadastro Necessário"
            texto="Comece a criar suas checklists imediatamente, sem a necessidade de se registrar ou fazer login. Basta digitar a URL desejada e começar a trabalhar."
          />
          <CardInfo
            titulo="Crie ou Acesse com uma URL"
            texto="Cada checklist é associada a uma URL única que você define. Use essa URL para criar uma nova checklist ou acessar uma existente."
          />
          <CardInfo
            titulo="Edição em Tempo Real"
            texto="As alterações que você faz em sua checklist são salvas e atualizadas em tempo real. Isso significa que qualquer pessoa com a URL pode ver as atualizações ao mesmo tempo."
          />
          <CardInfo
            titulo="Compartilhe e Colabore"
            texto="Compartilhe a URL da sua checklist com qualquer pessoa. Eles podem visualizar e editar a checklist, tornando fácil a colaboração em tarefas e projetos."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;
