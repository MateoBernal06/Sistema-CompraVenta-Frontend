import './register.css'
import { Button } from 'rsuite';

import DragonDesfile from '../../assets/images/DragonDesfile.webp'

export const PageRegister = () => {
    return (
        <div className="register-container">
            <div className='place-imagen'>
                <img src={DragonDesfile} alt="Desfile" className='image-class'/>
            </div>

            <div className='place-form'>
                <p className="text-title">Crea tu cuenta 🐲</p>
                <form className='form-registrar' onSubmit={(e) => { e.preventDefault()}}>
                    <div className='input-form'>
                        <label htmlFor="name">Nombres</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            className='input' 
                            required 
                        />
                    </div>

                    <div className='input-form'>
                        <label htmlFor="lastName">Direccion</label>
                        <input 
                            type="text" 
                            id="direccion" 
                            name="direccion"
                            className='input' 
                            required 
                        />
                    </div>

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
                        <label htmlFor="celular">Celular</label>
                        <input 
                            type="text" 
                            id="celular" 
                            name="celular"
                            className='input' 
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
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
                    <Button color="red" appearance="primary" className='boton-register'>Registrar</Button>
                </form>
                <div className='go-login'>
                    <p>Ya tienes una cuenta?</p>
                    <Button color="green" appearance="primary" className='button-landingPage'>Login</Button>
                </div>
            </div>
        </div>
    );
};
