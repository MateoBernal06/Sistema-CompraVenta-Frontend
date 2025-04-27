import { Button } from 'rsuite';
import './userStyle.css'


export const PageRestore = () => {
    
    return (
        <div className='place-form-restore'>
            <p className="text-title-restore">Restablecer Contraseña🐲</p>
            <p className='text-forgot'>Ingresa una nueva contraseña que no olvidaras</p>
            <form className='form-registrar' onSubmit={(e) => { e.preventDefault()}}>
            
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

                <div className='input-form'>
                    <label htmlFor="confirm-password">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password"
                        className='input' 
                        required 
                    />
                </div>
                <Button color="red" appearance="primary" className='boton-register'>Restablecer Contraseña</Button>
            </form>
        </div>
    );
}