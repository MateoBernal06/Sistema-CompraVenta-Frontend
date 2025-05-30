
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './userStyle.css';
import { Link } from 'react-router-dom';
import Visto from './../../assets/logos/visto.webp'
import { BarVerification } from '../Landing/NavLanding/BarVerification';


export const Confirmar = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState('Verificando...');
    const [tokenValido, setTokenValido] = useState(false);
    
    useEffect(() => {
        if (!token) {
            setMensaje('Token no válido');
            setTokenValido(false);
            return;
        }

        const verificar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`);
                const data = await res.json();

                if (res.ok) {
                    setMensaje(data.msg || 'Cuenta verificada con éxito');
                    setTokenValido(true);
                } else {
                    setMensaje(data.msg || 'Error al verificar cuenta');
                    setTokenValido(false);
                }
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje('Error de red al verificar cuenta');
                setTokenValido(false);
            }
        };

        verificar();
    }, [token]);

    return (
        <>
            <BarVerification />
            <div className='confirmar-container'>
                <h1>Confirmación de Registro</h1>
                <img className='image-class-confirmacion' src={Visto} alt="imagen de confirmacion" />
                <p>{mensaje}</p>
                <div className='confirmar-link'>
                    <Link to="/">
                        <button disabled={!tokenValido}>Ya puedes iniciar sesión</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
