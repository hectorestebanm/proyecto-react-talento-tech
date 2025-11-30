import styles from '../ModuleCSS/Productos.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () =>
{
    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const manejarSubmit = (evento) =>
    {
        evento.preventDefault();

        if (login(usuario, contrasenia))
        {
            navigate("/");
        }
        else
        {
            alert("Usuario o Contraseña invalido");
        }
    };

    return(
    <>
        <div className="container p-5">
            <div className="mb-5">
                <h2 className="text-center text-primary-emphasis">
                    Iniciar Sesión
                </h2>
            </div>

            <div className="d-flex justify-content-center">
            {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> */}
                <form onSubmit={manejarSubmit} className="">
                    <div className="mb-3">
                        <label
                            htmlFor="usuario"
                            className="fw-bold mb-1"
                        >
                            Usuario
                        </label>
                        <div className="">
                            <input
                                id="usuario"
                                name="usuario"
                                type="text"
                                value={usuario}
                                onChange={(evento) => setUsuario(evento.target.value)}
                                className="form-control"
                                placeholder="Ingrese usuario"
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="">
                            <label
                                htmlFor="password"
                                className="fw-bold mb-1"
                            >
                            Contraseña
                            </label>
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={contrasenia}
                                onChange={(evento) => setContrasenia(evento.target.value)}
                                className="form-control"
                                placeholder="Ingrese contraseña"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`shadow ${styles.login}`}
                        >
                            Ingresá
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </>
    );
};

export default Login;