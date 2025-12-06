import { useContext } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import styles from '../ModuleCSS/Productos.module.css'
import { CarritoContext } from '../context/CarritoContext'

const Carrito = () =>
{
    const { carrito, eliminarDelCarrito } = useContext(CarritoContext)
    if (carrito.length === 0)
    {
        return(
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="text-center mb-5">
                    <FaCartShopping className={styles.vacio} />
                    <h2 className="fw-bold text-dark-emphasis mb-4">Tu carrito está vacío</h2>
                    <p className="fw-bold text-dark-emphasis mb-5">¡Agregá productos para comenzar tu compra!</p>
                    <a href="/" className={styles.login}>
                        Ir a comprar
                    </a>
                </div>
            </div>
        );
    }
    return(
        <div>
         {/* <div className="d-flex flex-column justify-content-center align-items-center"> */}
            <h2 className={styles.h2}>Lista del Carrito</h2>
            <ul className={styles.lista}>
            {
                carrito.map((producto, indice) =>
                (
                    <li className={styles.li} key={producto.indice}>
                        {producto.nombre} - ${producto.precio} <img src = {producto.imagen} alt="Imagen" width={80} height={80}/> <button className={styles.eliminar} onClick={() => eliminarDelCarrito(indice)}> <FaRegTrashCan className='me-2'/> Eliminar</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Carrito