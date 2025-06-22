import './BarNavegation.css'
import Logo from '../../../assets/logos/logo-project.png'
import { Button } from 'rsuite';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ModalLogin } from '../../../layouts/modals/modalLogin/ModalLogin';
import { ModalRegistro } from '../../../layouts/modals/modalRegistro/ModalResgistro';

export const BarNavegation = () => {
    const [login, setLogin] = useState(false);
    const [registro, setRegistro] = useState(false);

    return(
        <>
            <nav className="bar-navegation">
                <div className='logo-project'>
                    <img src={Logo} alt="Logo" className='logo'/>
                </div>
                <div className='place-buttons'>
                    <Button color="blue" appearance="ghost" className='button-landingPage' onClick={() => setLogin(true)}>Iniciar Sesion</Button>
                    <Button color="green" appearance="ghost" className='button-landingPage' onClick={() => setRegistro(true)}>Registro</Button>
                </div>
            </nav>
            <ModalLogin show={login} onHide={() => setLogin(false)} />
            <ModalRegistro show={registro} onHide={() => setRegistro(false)} />
        </>
    )
}
