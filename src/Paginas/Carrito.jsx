import { useContext } from 'react'
import styles from '../ModuleCSS/Productos.module.css'
import { CarritoContext } from '../context/CarritoContext'

const Carrito = () =>
{
    const { carrito, eliminarDelCarrito } = useContext(CarritoContext)
    if (carrito.length === 0)
    {
        return(
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
                    <p className="text-gray-600 mb-6">¡Agregá productos para comenzar tu compra!</p>
                    <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#333] transition-colors duration-200">
                        Ir a comprar
                    </a>
                </div>
            </div>
        );
    }
    return(
        <div>
            <h2 className={styles.h2}>Lista del Carrito</h2>
            <ul className={styles.lista}>
            {
                carrito.map((producto, indice) =>
                (
                    <li className={styles.li} key={producto.indice}>{producto.nombre} - ${producto.precio} <img src = {producto.imagen} alt="Imagen" width={80} height={80}/> <button className={styles.eliminar} onClick={() => eliminarDelCarrito(indice)}>Eliminar</button></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Carrito