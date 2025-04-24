import './BarNavegation.css'
import Button from 'react-bootstrap/Button'

export const BarNavegation = () => {
    return(
        <>
            <nav className="bar-navegation">
                <div className='logo-project'>logo</div>
                <div className='place-buttons'>
                    <Button variant="light" className='button-landingPage'>Login</Button>
                    <Button variant="primary" className='button-landingPage'>Registro</Button>
                </div>
            </nav>
        </>
    )
}
