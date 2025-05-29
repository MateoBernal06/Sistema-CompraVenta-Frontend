import './userStyle.css'
import { Button } from 'rsuite';
import imagenForgot from '../../assets/images/imagen-forgot.webp'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {recuperarEstudiante} from '../../api/registro';

export const PageForgot = () =>{
    const [mensajeEnviado, setMensajeEnviado] = useState('');

    const [form, setFormData] = useState({
        email:'',

    });

    useEffect(() => {
        setFormData({ email: '' });
        setMensajeEnviado('');
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await recuperarEstudiante(form);
        console.log('Respuesta del servidor:', resultado);
        setMensajeEnviado(resultado.mensaje);

        if (resultado.exito) {
            setFormData(
                { email: '' }
            );
        }
    };

    return(
        <div className="register-container">
            <div className='place-imagen'>
                <img 
                    alt="Grupo-amigos" 
                    className='image-class' 
                    loading="lazy" 
                    src={imagenForgot}/>
            </div>
            <div className='place-form'>
                <p className="text-title-restore">Recupera tu contraseña 🐲</p>
                <p className='text-forgot'>Ingresa el correo electronico registrado para restablecer la contraseña</p>
                <form className='form-registrar' onSubmit={handleSubmit}>
                    <div className='input-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className='input' 
                            required 
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <Button 
                        color="red" 
                        type="submit"
                        appearance="primary" 
                        className='boton-register'>Recuperar
                    </Button>
                </form>
                <div className='go-login'>
                    <p>Ya publicaste tus artículos?</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}
