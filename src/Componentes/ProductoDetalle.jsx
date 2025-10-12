import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductoDetalle = () =>
{
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    useEffect(() =>
    {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((respuesta) => respuesta.json())
        .then((dato) => setProducto(dato))
    }, [id])
    if(!producto)
        return <p>Cargando...</p>
    return(
        <div>
            <h1>Detalles del producto Nro { id }</h1>
            <img src = {producto.image} alt={producto.title} width={100} height={100}/>
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
        </div>
    )
}

export default ProductoDetalle