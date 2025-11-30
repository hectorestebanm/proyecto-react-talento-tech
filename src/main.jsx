import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { SearchProvider } from './context/BusquedaContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ProductosProvider>
                    <SearchProvider>
                        <CarritoProvider>
                            <App />
                        </CarritoProvider>
                    </SearchProvider>
                </ProductosProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
