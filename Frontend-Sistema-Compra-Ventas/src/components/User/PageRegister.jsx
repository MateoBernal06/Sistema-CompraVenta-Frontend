import './userStyle.css'
import { Button } from 'rsuite';
import DragonDesfile from '../../assets/images/DragonDesfile.webp'
import { Link } from 'react-router-dom';
export const PageRegister = () => {
    return (
        <div className="register-container">
            <div className='place-imagen'>
                <img 
                    src={DragonDesfile} 
                    alt="Grupo-amigos" 
                    className='image-class' 
                    loading="lazy" 
                />
            </div>

            <div className='place-form'>
                <p className="text-title-restore">Crea tu cuenta 🐲</p>
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
                        <label htmlFor="direccion">Direccion</label>
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
                        <label htmlFor="password">Contraseña</label>
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
                    <Link to='/login'><Button color="green" appearance="primary" className='button-landingPage'>Login</Button></Link>
                </div>
            </div>
        </div>
    );
};
