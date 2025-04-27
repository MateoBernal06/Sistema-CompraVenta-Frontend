import './BarNavegation.css'
import Logo from '../../../assets/logos/logo-project.png'
import { Button } from 'rsuite';
import { Link } from 'react-router-dom'

export const BarNavegation = () => {
    return(
        <>
            <nav className="bar-navegation">
                <div className='logo-project'>
                    <img src={Logo} alt="Logo" className='logo'/>
                </div>
                <div className='place-buttons'>
                    <Link to='/login'> <Button color="blue" appearance="primary" className='button-landingPage'>Login</Button></Link>
                    <Link to='/register'><Button color="green" appearance="primary" className='button-landingPage'>Registro</Button></Link> 
                </div>
            </nav>
        </>
    )
}
