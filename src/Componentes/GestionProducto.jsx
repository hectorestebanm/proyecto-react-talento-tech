import styles from '../ModuleCSS/Productos.module.css'
import { MdEdit } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
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
                    <div className={styles.overlay}>
                        <div className="border rounded bg-white">
                            <div className={`p-4 ${styles.modal}`}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="w-25 h-25">
                                        <RiErrorWarningLine className="w-50 h-50 text-danger"/>
                                    </div>
                                    <div>
                                        <h3 className="text-dark-emphasis">Confirmar eliminación</h3>
                                        <p className="text-dark-emphasis">Esta acción no se puede deshacer</p>
                                    </div>
                                </div>
                
                                <div className="text-center">
                                    <p className="text-dark-emphasis">
                                        ¿Estás seguro que querés eliminar <span className="fw-bold">"{productoAEliminar.nombre}"</span>?
                                    </p>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        onClick={() => setProductoAEliminar(null)}
                                        className={styles.cancelar}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleEliminar}
                                        className={styles.eliminar}
                                    >
                                        Eliminar
                                    </button>
                                </div>
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