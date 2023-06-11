import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Footer from './components/Footer';
import Input from './components/Input';

const App = () => {
  return (
    <Layout className="layout">
      <div className="conteudo-principal">
        <div className="titulo">
          <h1 className="titulo-principal fonte-bold-xl">CHECK<span>CHAP</span></h1>
          <h3 type="secondary" className="subtitulo fonte-bold-l">Crie checklists de forma <span>ágil e intuitiva.</span></h3>
        </div>
        <Row justify="center" align="middle">
          <Col>
            <Input />
          </Col>
          <Divider className="divisor" />
        </Row>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
