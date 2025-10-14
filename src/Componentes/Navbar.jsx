import styles from '../ModuleCSS/Navbar.module.css'
import { Link } from "react-router-dom"

const Navbar = () =>
{
    return(
        <nav className={styles.nav}>
            <p className={styles.p}>Factory Tech</p>
            <ul className={styles.lista}>
                <li><Link to = "/" className={styles.link}>Inicio</Link></li>
                <li><Link to = "/productos" className={styles.link}>Productos</Link></li>
                {/* <li><Link to = "/carrito">Carrito</Link></li> */}
                <li><Link to = "/sobreNosotros" className={styles.link}>Sobre Nosotros</Link></li>
                <li><Link to = "/contacto" className={styles.link}>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar