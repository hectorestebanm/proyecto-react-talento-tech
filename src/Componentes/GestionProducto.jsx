import styles from '../ModuleCSS/Productos.module.css'
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductosContext";

const GestionProductos = () =>
{
    const { productos, eliminarProducto } = useProductosContext();
    const [mostrarForm, setMostrarForm] = useState(false);
    const [modoFormulario, setModoFormulario] = useState("agregar");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    // Abrir formulario para AGREGAR
    const abrirFormularioAgregar = () =>
    {
        setModoFormulario("agregar");
        setProductoSeleccionado(null);
        setMostrarForm(true);
    };

    // Abrir formulario para EDITAR
    const abrirFormularioEditar = (producto) =>
    {
        setModoFormulario("editar");
        setProductoSeleccionado(producto);
        setMostrarForm(true);
    };

    // Cerrar formulario
    const cerrarFormulario = () =>
    {
        setMostrarForm(false);
        setProductoSeleccionado(null);
    };

    // Confirmar eliminación
    const confirmarEliminacion = (producto) =>
    {
        setProductoAEliminar(producto);
    };

    const handleEliminar = () =>
    {
        if(productoAEliminar)
        {
          eliminarProducto(productoAEliminar.id);
          setProductoAEliminar(null);
        }
    };

    return(
        <div className="">
            {/* Header */}
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-dark-emphasis mb-4">Lista de Productos</h2>
                <button
                    onClick={abrirFormularioAgregar}
                    className={styles.agregarAdmin}
                >
                    <span className="fw-bold">Agregar Producto</span>
                </button>
            </div>

            {/* Lista de productos */}
            {
                productos.length === 0 ?
                (
                    <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                        <p className="text-gray-600 text-lg">No hay productos</p>
                    </div>
                ) :
                (
                    <div className="">
                        {
                            productos.map((producto) =>
                            (
                                <div
                                    key={producto.id}
                                    className="border border-gray-200 rounded p-3 my-3"
                                >
                                    <div className="d-flex gap-4">
                                    {/* Imagen del producto */}
                                        <div className="">
                                            <img 
                                                src={producto.imagen} 
                                                alt={producto.nombre}
                                                // className="w-full sm:w-32 sm:h-32 object-cover rounded-md"
                                                className={styles.width}
                                            />
                                        </div>

                                        {/* Información del producto */}
                                        <div className="grow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                                            <div className=" flex grow">
                                                <h3 className="text-dark-emphasis">
                                                    {producto.nombre}
                                                </h3>
                                                <p className="fw-bold text-dark-emphasis">
                                                    ${producto.precio?.toLocaleString('es-AR')}
                                                </p>
                                            </div>

                                            {/* Botones de editar y eliminar */}
                                            <div className="d-flex gap-2">
                                                <button
                                                    onClick={() => abrirFormularioEditar(producto)}
                                                    className={styles.editarAdmin}
                                                >
                                                    <MdEdit className='me-2'/>
                                                    <span className="text-sm">Editar</span>
                                                </button>
                                                <button
                                                    onClick={() => confirmarEliminacion(producto)}
                                                    className={styles.eliminarAdmin}
                                                >
                                                    <FaRegTrashCan className='me-2'/>
                                                    <span className="text-sm">Eliminar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            {/* Modal de confirmacion de eliminar */}
            {
                productoAEliminar &&
                (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Confirmar eliminación</h3>
                                    <p className="text-sm text-gray-600 mt-1">Esta acción no se puede deshacer</p>
                                </div>
                            </div>
            
                            <div className="mb-6">
                                <p className="text-gray-700">
                                    ¿Estás seguro que querés eliminar <span className="font-semibold">"{productoAEliminar.nombre}"</span>?
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setProductoAEliminar(null)}
                                    className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleEliminar}
                                    className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Modal - Formulario */}
            {
                mostrarForm &&
                (
                    <FormProducto
                        productoInicial={productoSeleccionado || {}}
                        modo={modoFormulario}
                        onCerrar={cerrarFormulario}
                    />
                )
            }
        </div>
    );
};

export default GestionProductos;