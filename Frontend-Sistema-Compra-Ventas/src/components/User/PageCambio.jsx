
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Cambiar = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState('Verificando...');
    const [tokenValido, setTokenValido] = useState(false);
    
    useEffect(() => {
        if (!token) {
            setMensaje('Token no válido');
            return;
        }

        const verificar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/comprobar-token/${token}`);
                const data = await res.json();

                if (res.ok) {
                    setMensaje(data.msg || 'Token confirmado con éxito');
                    setTokenValido(true);
                } else {
                    setMensaje(data.msg || 'Error al confirmar token');
                    setTokenValido(false);
                }
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje('Error de red al confirmar token');
                setTokenValido(false);
            }
        };

        verificar();
    }, [token]);

    return (
        <>
            <div>
                <h1>Confirmación de cambio de contraseña</h1>
                <p>{mensaje}</p>
            </div>
            <Link to={`/nuevo-password/${token}`}>
                <button disabled={!tokenValido}>
                    Cambiar contraseña
                </button>
            </Link>
        </>
    );
};
