
import {Navigate, Outlet} from 'react-router-dom'

const Auth = () => {
    const autenticado = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');
    if (autenticado) {
        if (rol === 'administrador') return <Navigate to="/dashboard" />;
        if (rol === 'estudiante') return <Navigate to="/estudiante" />;
    }
    return <Outlet />;
}
export default Auth
