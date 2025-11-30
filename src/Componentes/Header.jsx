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
        <header className="flex justify-between items-center px-10 border-b border-gray-200 relative z-50 py-3">

            {/* Seccion Izquierda: Logo */}
            <div className="xl:text-[40px] sm:text-[30px] text-[30px] font-bold text-[#333] font-['Pirata_One']">
                <Link to="/">
                    Factory Tech
                </Link>
            </div>

            {/* Seccion Central: Componente NavBar - Desktop */}
            <div className="hidden md:block">
                <Navbar />
            </div>
            {/* Seccion Derecha: Iconos */}
            <div className="flex items-center gap-3 md:gap-4">
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
                                    className="hidden md:inline text-sm font-medium text-[#333] hover:underline transition-all duration-200 cursor-pointer"
                                >
                                    Hola, {usuario.nombre}
                                </Link>
                            ) : 
                            (
                                <span className="hidden md:inline text-sm font-medium text-[#333]">
                                    Hola, {usuario.nombre}
                                </span>
                            )
                        }
              
                        <button 
                            onClick={logout} 
                            className="hidden md:flex justify-center rounded-md border border-white bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200"
                        >
                            Cerrar Sesión
                        </button>
                    </>
                    ) : 
                    (
                    <Link to="/login" className="hidden md:block">
                        <button className="flex justify-center rounded-md border border-white bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200">
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
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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