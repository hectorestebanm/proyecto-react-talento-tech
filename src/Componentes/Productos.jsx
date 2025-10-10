import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Productos = () =>
{
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>
    {
        fetch("https://68da8c0923ebc87faa30874c.mockapi.io/ecommerse")
        .then((respuesta) => respuesta.json())
        .then((datos) =>
        {
            setProductos(datos)
            setCargando(false)
        })
        .catch((error) =>
        {
            setError("Hubo un problema al cargar los productos")
            setCargando(false)
        })
    },[])
    if(cargando)
        return <p>Cargando productos...</p>
    if(error)
        return <p>{error}</p>
    return(
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {
                    productos.map((producto) =>
                    (
                        <li key={producto.id}>{producto.nombre}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Productos
