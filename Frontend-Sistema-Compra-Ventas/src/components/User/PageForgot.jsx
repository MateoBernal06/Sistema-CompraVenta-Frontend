import './userStyle.css'
import { Button } from 'rsuite';
import imagenForgot from '../../assets/images/imagen-forgot.jpg'

export const PageForgot = () =>{
    return(
        <div className="register-container">
            <div className='place-imagen'>
                <img alt="Desfile" className='image-class' src={imagenForgot}/>
            </div>
            <div className='place-form'>
                <p className="text-title">Recupera tu contraseña 🐲</p>
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
                    <Button color="green" appearance="primary" className='button-landingPage'>Login</Button>
                </div>
            </div>
        </div>
    )
}
