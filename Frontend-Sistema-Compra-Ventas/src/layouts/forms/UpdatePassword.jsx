import { Button } from 'rsuite';
import '../../components/User/userStyle.css'

export const UpdatePassword = () =>{
    return(
        <div className='place-form-page-admin'>
            <p className="text-title-form">Actualizar datos del administrador</p>
            <form className='form-registrar' action="">
                <div className='input-form'>
                    <label htmlFor="password">Contraseña actual</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        className='input' 
                        required 
                    />
                </div>

                <div className='input-form'>
                    <label htmlFor="apellido">Nueva contraseña</label>
                    <input 
                        type="password" 
                        id="new_password" 
                        name="new_password"
                        className='input' 
                        required 
                    />
                </div>

                <div className='input-form'>
                    <label htmlFor="email">Repetir contraseña</label>
                    <input 
                        type="password" 
                        id="repeat_password" 
                        name="repeat_password"
                        className='input' 
                        required 
                    />
                </div>
                <Button color="blue" appearance="primary" className='boton-register'>Actualizar contraseña</Button>
            </form>
        </div>
    )
}
