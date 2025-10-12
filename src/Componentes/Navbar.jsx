import { Link } from "react-router-dom"

const Navbar = () =>
{
    return(
        <nav>
            <ul>
                <li><Link to = "/">Inicio</Link></li>
                <li><Link to = "/productos">Productos</Link></li>
                {/* <li><Link to = "/carrito">Carrito</Link></li> */}
                <li><Link to = "/sobreNosotros">Sobre Nosotros</Link></li>
                <li><Link to = "/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar