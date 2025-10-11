import { useParams } from "react-router-dom"

const ProductoDetalle = () =>
{
    const { id } = useParams()
    return(
        <div>
            <h1>Detalle del producto</h1>
            <p>Este es el detalle del producto con ID: { id }</p>
        </div>
    )
}

export default ProductoDetalle