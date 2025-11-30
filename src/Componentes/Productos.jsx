import { Link } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import { useState } from "react";

const Productos = () =>
{
    // Usamos los contextos
    const { productos, cargando, error } = useProductosContext();
  
    // Logica de Paginacion 
    const productosPorPagina = 8; 
    const [paginaActual, setPaginaActual] = useState(1);
  
    if (cargando) return "Cargando productos...";
    if (error) return error;

    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    // Cambiar de pagina
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    return(
        <div className="">
            <h2 className="text-center mb-4 text-primary-emphasis fw-bold">
                Lista de Productos
            </h2>
            <div className="container row mx-auto">
            {
                productosActuales.map((producto) =>
                (
                    <div key={producto.id} className="col-3 card text-center">
                        <img
                            alt={producto.nombre}
                            src={producto.imagen}
                            className="text-center"
                            // className={styles.width}
                        />
                        <div className="">
                            <div>
                                <h4 className="">
                                    <Link to={`/productos/${producto.id}`} className="text-decoration-none text-primary-emphasis fw-bold">
                                        {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                                        {producto.nombre}
                                    </Link>
                                </h4>
                            </div>
                            <p className="fw-bold">
                                ${producto.precio}
                            </p>
                        </div>
                    </div>
                ))
            }
            </div>
      
            {/* Paginador */}
            <div className="text-center m-4">
            {
                Array.from({ length: totalPaginas }, (_, indice) =>
                (
                    <button
                        key={indice + 1}
                        className=
                        {
                            `px-3 py-2 mx-2 rounded ${
                                paginaActual === indice + 1 
                                ? "bg-black text-white" 
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`
                        }
                        onClick={() => cambiarPagina(indice + 1)}
                    >
                        {indice + 1}
                    </button>
                ))
            }
            </div>
        </div>
    );
};

export default Productos;