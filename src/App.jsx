import Inicio from './Paginas/Inicio'
import Admin from './Paginas/Admin'
import Productos from './Componentes/Productos'
import ProductoDetalle from './Componentes/ProductoDetalle'
import { Route, Routes } from 'react-router-dom'
import Header from './Componentes/Header'
import Login from './Paginas/Login'
import ResultadosBusqueda from './Componentes/ResultadosBusqueda'
import Footer from './Componentes/Footer'
import Carrito from './Paginas/Carrito'
import SobreNosotros from './Paginas/SobreNosotros'
import Contacto from './Paginas/Contacto'
import RutaProtegida from './Componentes/RutaProtegida'

function App()
{
    return(
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-fill d-flex">
                <Routes>
                    <Route path = '/' element = {<Inicio />}/>
                    <Route path = '/productos' element = {<Productos />}/>
                    <Route path = '/login' element = {<Login />}/>
                    <Route path = '/sobreNosotros' element = {<SobreNosotros />}/>
                    <Route path = '/contacto' element = {<Contacto />}/>
                    <Route path = '/busqueda' element = {<ResultadosBusqueda />}/>
                    <Route path = '/productos/:id' element = {<ProductoDetalle />}/>
                    <Route path = '/carrito' element =
                    {
                        <RutaProtegida>
                            <Carrito />
                        </RutaProtegida>
                    }/>
                    <Route path = '/admin' element =
                    {
                        <RutaProtegida>
                            <Admin />
                        </RutaProtegida>
                    }/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
