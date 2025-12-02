import styles from '../ModuleCSS/Navbar.module.css'
import { useContext, useState } from 'react';
import Navbar from './Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';

const Header = () =>
{
    const { carrito } = useContext(CarritoContext);
    const { usuario, logout } = useAuthContext();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const estaLogeado = !!usuario;
    const contadorEnCarrito = carrito.length;
  
    // Verificamos si el usuario es admin
    const esAdmin = usuario?.rol === 'admin';

    const toggleMenu = () =>
    {
        setMenuAbierto(!menuAbierto);
    };

    const cerrarMenu = () =>
    {
        setMenuAbierto(false);
    };

    return(
    <>
        <header className="container d-flex justify-content-evenly mb-5 p-3">
        {/* <header className="container d-flex justify-content-evenly align-items-center"> */}

            {/* Seccion Izquierda: Logo */}
            <div className="">
                <Link to="/" className="text-decoration-none fw-bold fs-3 text-dark-emphasis">
                    Factory Tech
                </Link>
            </div>

            {/* Seccion Central: Componente NavBar - Desktop */}
            <div className="d-flex align-items-center">
                <Navbar />
            </div>
            {/* Seccion Derecha: Iconos */}
            <div className="d-flex align-items-center gap-3">
            {
                estaLogeado ?
                (
                    <>
                        {/* Si es admin, hacer el nombre clickeable, si no, solo texto */}
                        {
                            esAdmin ?
                            (
                                <Link 
                                    to="/admin" 
                                    className="text-decoration-none fw-bold text-dark-emphasis"
                                >
                                    Hola, {usuario.nombre}
                                </Link>
                            ) : 
                            (
                                <span className="fw-bold">
                                    Hola, {usuario.nombre}
                                </span>
                            )
                        }
              
                        <button 
                            onClick={logout} 
                            className={styles.cerrar}
                        >
                            Cerrar Sesión
                        </button>
                    </>
                    ) : 
                    (
                    <Link to="/login" className="">
                        <button className={styles.ingresa}>
                            Ingresá
                        </button>
                    </Link>
                    )
                }
          
                {/* Icono del carrito */}
                <div className="relative">
                    <Link to="/carrito">
                        <FaCartShopping />
                        {
                            contadorEnCarrito > 0 &&
                            (
                                <span className="">
                                    {contadorEnCarrito}
                                </span>
                            )
                        }
                    </Link>
                </div>
            </div>
        </header>

    </>
  );
};

export default Header;