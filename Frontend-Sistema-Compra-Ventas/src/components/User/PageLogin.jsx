import { Button } from 'rsuite';
import { Link } from 'react-router-dom';
import './userStyle.css'
import imagenLogin from '../../assets/images/imagen-login.webp'

export const PageLogin = () => {
    return (
        <div className="register-container">
            <div className='place-form'>
                <p className="text-title-restore">Inicia Sesion 🐲</p>
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
                        <label htmlFor="password">Contraseña</label>
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
                    <Link to='/register'><Button color="green" appearance="primary" className='button-landingPage'>Registrar</Button></Link>
                </div>
                <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
            </div>
            <div className='place-imagen'>
                <img 
                    src={imagenLogin} 
                    alt="Grupo-amigos" 
                    loading="lazy" 
                    className='image-class' 
                />
            </div>
        </div>
    );
};