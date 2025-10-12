import './App.css'
import Inicio from './Paginas/Inicio'
import Productos from './Componentes/Productos'
import ProductoDetalle from './Componentes/ProductoDetalle'
import { Route, Routes } from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Carrito from './Paginas/Carrito'
import SobreNosotros from './Paginas/SobreNosotros'
import Contacto from './Paginas/Contacto'

function App()
{
    return(
        <div>
            <Header />
            <Routes>
                <Route path = '/' element = {<Inicio />}/>
                <Route path = '/productos' element = {<Productos />}/>
                <Route path = '/productos/:id' element = {<ProductoDetalle />}/>
                <Route path = '/carrito' element = {<Carrito />}/>
                <Route path = '/sobreNosotros' element = {<SobreNosotros />}/>
                <Route path = '/contacto' element = {<Contacto />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
