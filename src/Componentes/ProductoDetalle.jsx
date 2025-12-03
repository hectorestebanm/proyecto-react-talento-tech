import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

const ProductoDetalle = () =>
{
    const { id } = useParams();
    const navigate = useNavigate();
    const { productos, cargando, error } = useProductosContext();
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cantidad, setCantidad] = useState(1);
    const [agregado, setAgregado] = useState(false);

    // Busco el producto por ID
    const producto = productos.find(p => p.id === id);

    const handleAgregarAlCarrito = () =>
    {
        for (let i = 0; i < cantidad; i++)
        {
            agregarAlCarrito(producto);
        }
        setAgregado(true);
        setTimeout(() => setAgregado(false), 2000);
    };

    const incrementarCantidad = () =>
    {
        setCantidad(cantidad + 1);
    };

    const decrementarCantidad = () =>
    {
        if (cantidad > 1)
        {
            setCantidad(cantidad - 1);
        }
    };

    if(cargando)
    {
        return(
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4">
                    </div>
                        <p className="text-gray-600 text-lg">Cargando producto...</p>
                </div>
            </div>
        );
    }

    if(error)
    {
        return(
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Error al cargar</h2>
                    <p className="text-gray-600 mb-6">Se ha producido un error al cargar el producto</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    if(!producto)
    {
        return(
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Producto no encontrado</h2>
                    <p className="text-gray-600 mb-6">El producto que buscás no existe</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    return(
        <div className=""> 
            {/* Contenido Principal */}
            <div className="row d-flex justify-content-center">
                {/* Columna Izquierda la de Imagen */}
                <div className="col-4">
                    <div className="">
                        <div className="">
                            <img 
                                src={producto.imagen} 
                                alt={producto.nombre}
                                className=""
                            />
                        </div>
                    </div>
                </div>

                {/* Columna Derecha la de Info de producto */}
                <div className="col-4">
                    <div className="">
                        <h1 className="">
                            {producto.nombre}
                        </h1>
            
                        {/* Categoria */}
                        {
                            producto.categoria &&
                            (
                                <span className="">
                                    {producto.categoria}
                                </span>
                            )
                        }

                        {/* Precio */}
                        <div className="">
                            <p className="">
                                ${producto.precio?.toLocaleString('es-AR')}
                            </p>
                        </div>

                        {/* Descripción */}
                        <div className="">
                            <h2 className="">Descripción</h2>
                            <p className="">
                                {producto.descripcion || "Este producto de alta calidad está diseñado para satisfacer tus necesidades. Fabricado con los mejores materiales y con atención al detalle."}
                            </p>
                        </div>
                    </div>

                    {/* Selector de cantidad y boton de compra */}
                    <div className="mt-auto border-t border-gray-200 pt-6">
                    {/* Botones de agregar a carrito y verlo */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button 
                                onClick={handleAgregarAlCarrito}
                                className=
                                {
                                    `flex-1 py-4 px-6 rounded-md font-semibold text-white transition-all duration-200 ${
                                    agregado 
                                    ? 'bg-green-600 hover:bg-green-700' 
                                    : 'bg-black hover:bg-gray-800'
                                    }`
                                }
                            >
                            {
                                agregado ?
                                (
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        ¡Agregado al carrito!
                                    </span>
                                ) :
                                (
                                    'Agregar al Carrito'
                                )
                            }
                            </button>
              
                            <button 
                                onClick={() => navigate('/carrito')}
                                className="sm:w-auto py-4 px-6 border-2 border-black text-black rounded-md font-semibold hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                Ver Carrito
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Boton volver en celular */}
            <div className="mt-8 lg:hidden">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default ProductoDetalle;