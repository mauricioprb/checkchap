import React from 'react';
import styles from '../../css/telaPrincipal/Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.texto}>
                &#169; {currentYear} - <span className={styles.copyright}>CheckChap</span>
            </div>
        </footer>
    );
}

export default Footer;