import '../../components/User/userStyle.css'
import { Button } from 'rsuite';

export const FormPerfil = () => {
    return (
        <div className='place-form-page-admin'>
            <p className="text-title-form">Actualizar datos del administrador</p>
            <form className='form-registrar' action="">
                <div className='input-form'>
                    <label htmlFor="nombres">Nombre</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className='input' 
                        required 
                    />
                </div>

                <div className='input-form'>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        id="apellido" 
                        name="apellido"
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
                <Button color="blue" appearance="primary" className='boton-register'>Actualizar</Button>
            </form>
        </div>
    );
}
