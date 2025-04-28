
import {Navigate, Outlet} from 'react-router-dom'

const Auth = () => {
    const autenticado = localStorage.getItem('token')
    return (
        <main>
            {autenticado ? <Navigate to="/dashboard" /> : <Outlet />}
        </main>
    )
}
export default Auth
