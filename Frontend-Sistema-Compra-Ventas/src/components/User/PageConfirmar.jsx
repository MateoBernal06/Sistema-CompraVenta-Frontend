
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Confirmar = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState('Verificando...');
    
    useEffect(() => {
        if (!token) {
            setMensaje('Token no válido');
            return;
        }

        const verificar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`);
                const data = await res.json();

                if (res.ok) {
                    setMensaje(data.msg || 'Cuenta verificada con éxito');
                } else {
                    setMensaje(data.msg || 'Error al verificar cuenta');
                }
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje('Error de red al verificar cuenta');
            }
        };

        verificar();
    }, [token]);

    return (
        <div>
            <h1>Confirmación de Registro</h1>
            <p>{mensaje}</p>
        </div>
    );
};
