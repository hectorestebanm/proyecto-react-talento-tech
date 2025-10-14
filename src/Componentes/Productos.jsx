import styles from '../ModuleCSS/Productos.module.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Boton from "./Boton"

const Productos = ({agregarProducto}) =>
{
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>
    {
        // fetch("https://68da8c0923ebc87faa30874c.mockapi.io/ecommerse")
        fetch("https://fakestoreapi.com/products")
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
        <div className={styles.div}>
            <h2>Lista de Productos</h2>
            <ul className={styles.lista}>
                {
                    productos.map((producto) =>
                    (
                        <li className={styles.li} key={producto.id}>{producto.title} - ${producto.price} <img src = {producto.image} alt="Imagen" width={70} height={70}/> <button className={styles.agregar} onClick = {() => agregarProducto(producto)}>Agregar</button> <Link className={styles.link} to = {`/productos/${producto.id}`}>Detalles</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Productos
