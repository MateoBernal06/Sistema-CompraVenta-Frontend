import './BarNavegation.css'
import Logo from '../../../assets/logos/logo-project.png'
import { Button } from 'rsuite';

export const BarNavegation = () => {
    return(
        <>
            <nav className="bar-navegation">
                <div className='logo-project'>
                    <img src={Logo} alt="Logo" className='logo'/>
                </div>
                <div className='place-buttons'>
                    <Button color="blue" appearance="primary" className='button-landingPage'>Login</Button>
                    <Button color="green" appearance="primary" className='button-landingPage'>Registro</Button>
                </div>
            </nav>
        </>
    )
}
