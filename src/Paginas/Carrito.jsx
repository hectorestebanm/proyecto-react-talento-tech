const Carrito = ({productosEnCarrito}) =>
{
    return(
        <div>
            <h2>Lista del Carrito</h2>
            <ul>
            {
                productosEnCarrito.map((producto) =>
                (
                    <li key={producto.id}>{producto.title} - ${producto.price} <img src = {producto.image} alt="Imagen" width={80} height={80}/></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Carrito