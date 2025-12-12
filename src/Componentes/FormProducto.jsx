import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { MdClose } from "react-icons/md";
import styles from "../ModuleCSS/FormProducto.module.css";
// import X from "../assets/X";

const FormProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) =>
{
  
    const [producto, setProducto] = useState(productoInicial);
    const { agregarProducto, editarProducto } = useProductosContext();

    const manejarChange = (evento) =>
    {
        const { name, value } = evento.target;
        setProducto({ ...producto, [name]: value });
    };

    const manejarSubmit = async (evento) =>
    {
        evento.preventDefault();
        if (modo === "agregar")
        {
            await agregarProducto(producto);
        }
        else
        {
            await editarProducto(producto);
        }
        onCerrar();
    };

    return(
        <div className={styles.overlay}>
            <div className={`border rounded bg-white ${styles.modal}`}>
                {/* Contenido del Modal */}
                <div className={styles.formModal}>   
                    {/* Encabezado del Modal */}
                    <div className="d-flex flex-rows justify-content-between align-items-center">
                        <h3>
                            {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
                        </h3>
                        <button 
                            type="button" 
                            onClick={onCerrar}
                        >
                            <MdClose />
                        </button>
                    </div>
                    {/* Cuerpo del Modal */}
                    <form onSubmit={manejarSubmit}>
                        <div>
                            {/* Campo Nombre */}
                            <div className="d-flex flex-column">
                                <label>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Ingrese el nombre del producto"
                                    value={producto.nombre || ""}
                                    onChange={manejarChange}
                                    required
                                />
                            </div>
                            {/* Campo Precio */}
                            <div className="d-flex flex-column">
                                <label>
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    name="precio"
                                    id="precio"
                                    placeholder="$0.00"
                                    value={producto.precio || ""}
                                    onChange={manejarChange}
                                    required
                                    min="0"
                                    step="any"
                                />
                            </div>
              
                            {/* Campo URL de Imagen */}
                            <div className="d-flex flex-column">
                                <label>
                                    URL de Imagen
                                </label>
                                <input
                                    type="text"
                                    name="imagen"
                                    id="imagen"
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                    value={producto.imagen || ""}
                                    onChange={manejarChange}
                                />
                            </div>
                            {/* Campo Descripcion */}
                            <div className="d-flex flex-column">
                                <label>
                                    Descripción del Producto
                                </label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    rows="4"
                                    placeholder="Escriba la descripción del producto aquí"
                                    value={producto.descripcion || ""}
                                    onChange={manejarChange}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        {/* Botones de Accion */}
                        <div className="d-flex justify-content-center">
                            {/* Boton Primario */}
                            <button
                                className={styles.formAceptar}
                                type="submit" 
                            >
                                {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
                            </button>
                            {/* Boton Secundario o de cancelar */}
                            <button 
                                className={styles.formCancelar}
                                type="button" 
                                onClick={onCerrar}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormProducto;