import React from 'react';
import './css/util/cores.modules.css';
import styles from './css/App.module.css';
import Input from './components/telaPrincipal/Input';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.conteudoPrincipal}>
        <div className={styles.titulo}>
          <h1>CHECK<span>CHAP</span></h1>
          <h3>Crie checklists de forma <span>ágil e intuitiva.</span></h3>
        </div>
        <div className={styles.input}>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
