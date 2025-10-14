import styles from '../ModuleCSS/Footer.module.css'

const Footer = () =>
{
    return(
        <footer className={styles.footer}>
            <p>&copy; 2025 - Factory Tech</p>
            <p>Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer