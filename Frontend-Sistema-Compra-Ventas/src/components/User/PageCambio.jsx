
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './userStyle.css';
import Visto from './../../assets/logos/visto.webp'
import { BarVerification } from '../Landing/NavLanding/BarVerification';
import { ToastContainer,toast } from 'react-toastify';

export const Cambiar = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState('Verificando...');
    const [tokenValido, setTokenValido] = useState(false);
    
    useEffect(() => {
        if (!token) {
            setMensaje('Token no válido');
            setTokenValido(false);
            toast.dismiss();
            toast.error('Token no válido');
            return;
        }

        const verificar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/comprobar-token/${token}`);
                const data = await res.json();

                if (res.ok) {
                    setMensaje(data.msg || 'Token confirmado con éxito');
                    setTokenValido(true);
                    toast.success(data.msg || 'Cuenta verificada con éxito');
                } else {
                    setTokenValido(false);
                    setMensaje(data.msg || 'Error al confirmar token');
                }
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje('Error de red al confirmar token');
                toast.error('Error de red al verificar cuenta');
            }
        };

        verificar();
    }, [token]);

    return (
        <>
            <BarVerification />
            <div className='confirmar-container'>
                <h1>Confirmación de cambio de contraseña</h1>
                <img src={Visto} className='image-class-confirmacion' alt="Imagen de confirmación" />
                <p>{mensaje}</p>
                <div className='confirmar-link'>
                    <Link to={`/nuevo-password/${token}`}>
                        <button disabled={!tokenValido}>Cambiar contraseña</button>
                    </Link>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};
