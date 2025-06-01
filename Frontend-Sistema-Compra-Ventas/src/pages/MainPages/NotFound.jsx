import { Link } from 'react-router-dom';
import { BarVerification } from '../../components/Landing/NavLanding/BarVerification'

const NotFound = () => {
    return (
        <>
            <BarVerification />
            <div className='place-form-restore'>
                <h1>404 - Página No Encontrada</h1>
                <p>La pagina que intentas solicitar no se encuentra  en el servidor.</p>
                <Link to="/">Ir a Inicio</Link>
            </div>
        </>
    );
};

export default NotFound;