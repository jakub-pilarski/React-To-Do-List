import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p>Copyright&#169; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;