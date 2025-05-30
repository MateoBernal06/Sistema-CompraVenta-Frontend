import { Button } from 'rsuite';
import './userStyle.css'
import { useState } from 'react';
import { nuevaContrasenaEstudiante } from '../../api/registro';
import { useParams } from 'react-router-dom';


export const PageRestore = () => {
    
    const [mensajeEnviado, setMensajeEnviado] = useState('');
    const { token } = useParams();
    
    const [form, setFormData] = useState({
        password:'',
        confirmpassword:''
    });

    const handleChange = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await nuevaContrasenaEstudiante({
            ...form,
            token
        });
        console.log('Respuesta del servidor:', resultado);
        setMensajeEnviado(resultado.mensaje);

        if (resultado.exito) {
            setFormData(
                { password:'', confirmpassword:'' }
            );
        }
    };


    return (
        <div className='place-form-restore'>
            <p className="text-title-restore">Restablecer Contraseña🐲</p>
            <p className='text-forgot'>Ingresa una nueva contraseña que no olvidaras</p>
            <form className='form-registrar' onSubmit={handleSubmit}>
            
                <div className='input-form'>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className='input' 
                        required 
                    />
                </div>

                <div className='input-form'>
                    <label htmlFor="confirmpassword">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id="confirmpassword" 
                        name="confirmpassword"
                        value={form.confirmpassword}
                        onChange={handleChange}
                        className='input' 
                        required 
                    />
                </div>
                <Button 
                    color="red" 
                    appearance="primary" 
                    className='boton-register'
                    type="submit"
                >Restablecer Contraseña</Button>
            </form>
        </div>
    );
}