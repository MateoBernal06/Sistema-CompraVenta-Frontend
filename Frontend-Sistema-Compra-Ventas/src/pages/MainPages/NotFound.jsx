import { BarNavegation } from '../../components/Landing/NavLanding/BarNavegation'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <BarNavegation />
            <div className='place-form-restore'>
                <h1>404 - Página No Encontrada</h1>
                <p>La pagina que intentas solicitar no se encuentra  en el servidor.</p>
                <Link to="/">Ir a Inicio</Link>
            </div>
        </>
    );
};

export default NotFound;