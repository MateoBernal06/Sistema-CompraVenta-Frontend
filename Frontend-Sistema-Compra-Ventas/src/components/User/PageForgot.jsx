import './userStyle.css'
import { Button } from 'rsuite';
import imagenForgot from '../../assets/images/imagen-forgot.webp'
import { Link } from 'react-router-dom';

export const PageForgot = () =>{
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
                    <Button color="red" appearance="primary" className='boton-register'>Recuperar</Button>
                </form>
                <div className='go-login'>
                    <p>Ya tienes una cuenta?</p>
                    <Link to="/login"><Button color="green" appearance="primary" className='button-landingPage'>Login</Button></Link>
                </div>
            </div>
        </div>
    )
}
