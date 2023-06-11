import React from 'react';
import styles from '../../css/telaPrincipal/Input.module.css';

const Input = () => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.tagContainer}>
                <span className={styles.tagText}>checkchap.tech/</span>
            </div>
            <input
                className={styles.input}
                type="text"
                placeholder="Link único para a página"
            />
            <button className={styles.botaoProsseguir}>Prosseguir</button>
        </div>
    );
}

export default Input;
