import { useSearch } from "../context/BusquedaContext";
import { useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useSearch();
  const navigate = useNavigate();

  const manejarBusqueda = (evento) => {
    const valor = evento.target.value;
    setBusqueda(valor);

    // Si hay texto, navegar a la página de búsqueda
    if (valor.trim()) {
      navigate("/busqueda");
    }
  };

  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Buscar Productos..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </div>
    </form>
  );
};

export default BarraBusqueda;