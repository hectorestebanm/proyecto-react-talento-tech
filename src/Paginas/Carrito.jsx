const Carrito = ({productosEnCarrito, productosEliminados}) =>
{
    return(
        <div>
            <h2>Lista del Carrito</h2>
            <ul>
            {
                productosEnCarrito.map((producto, indice) =>
                (
                    <li key={producto.indice}>{producto.title} - ${producto.price} <img src = {producto.image} alt="Imagen" width={80} height={80}/> <button onClick={() => productosEliminados(indice)}>Eliminar</button></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Carrito