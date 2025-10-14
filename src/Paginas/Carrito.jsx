import styles from '../ModuleCSS/Productos.module.css'

const Carrito = ({productosEnCarrito, productosEliminados}) =>
{
    return(
        <div>
            <h2 className={styles.h2}>Lista del Carrito</h2>
            <ul className={styles.lista}>
            {
                productosEnCarrito.map((producto, indice) =>
                (
                    <li className={styles.li} key={producto.indice}>{producto.title} - ${producto.price} <img src = {producto.image} alt="Imagen" width={80} height={80}/> <button className={styles.eliminar} onClick={() => productosEliminados(indice)}>Eliminar</button></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Carrito