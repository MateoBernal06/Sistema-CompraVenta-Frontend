import './userStyle.css'
import { Button } from 'rsuite';
import imagenForgot from '../../assets/images/imagen-forgot.webp'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {recuperarEstudiante} from '../../context/api/registro';
import { ToastContainer,toast } from 'react-toastify';

export const PageForgot = () =>{
    
    const [form, setFormData] = useState({
        email:'',
    });

    useEffect(() => {
        setFormData({ email: '' });
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

        if (resultado.exito) {
            toast.success(resultado.mensaje || "Correo enviado exitosamente");
            setFormData(
                { email: '' }
            );
        }
        else {
            toast.error(resultado.mensaje || "Error al enviar el correo");
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
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}
