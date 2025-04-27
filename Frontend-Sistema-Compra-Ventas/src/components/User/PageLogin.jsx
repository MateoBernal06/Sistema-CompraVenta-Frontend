import { Button } from 'rsuite';
import './register.css'

import imagenLogin from '../../assets/images/imagen-login.webp'

export const PageLogin = () => {
    return (
        <div className="register-container">
            <div className='place-form'>
                <p className="text-title">Inicia Sesion 🐲</p>
                <form className='form-registrar' onSubmit={(e) => { e.preventDefault()}}>
                    <div className='input-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className='input' 
                            required 
                        />
                    </div>
                    
                    <div className='input-form'>
                        <label htmlFor="contrasena">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            className='input' 
                            required 
                        />
                    </div>
                    <Button color="blue" appearance="primary" className='boton-register'>Login</Button>
                </form>
                <div className='go-login'>
                    <p>Todavia no tienes una cuenta?</p>
                    <Button color="green" appearance="primary" className='button-landingPage'>Registrar</Button>
                </div>
                <a href="/forgot-password">Olvidaste tu contraseña?</a>
            </div>
            <div className='place-imagen'>
                <img src={imagenLogin} alt="Desfile" className='image-class'/>
            </div>
        </div>
    );
};