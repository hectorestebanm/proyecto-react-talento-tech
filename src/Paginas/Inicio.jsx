import Header from '../Componentes/Header'
import Footer from '../Componentes/Footer'
import Productos from '../Componentes/Productos'
import Carrito from './Carrito'
import { useState } from 'react'

const Inicio = () =>
{
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (producto) =>
    {
        setCarrito([...carrito, producto])
    }
    const eliminarDelCarrito = (indiceAEliminar) =>
    {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    }

    return(
        <div>
            <h1>Bienvenido a la página de Inicio</h1>
            <Productos agregarProducto = {agregarAlCarrito}/>
            <Carrito productosEnCarrito = {carrito} productosEliminados = {eliminarDelCarrito}/>
        </div>
    )
}

export default Inicio