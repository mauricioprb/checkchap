import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./components/Paginas/PaginaPrincipal";
import PaginaChecklists from "./components/Paginas/PaginaChecklists";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/checklists" element={<PaginaChecklists />} />
      </Routes>
    </Router>
  );
};

export default App;
