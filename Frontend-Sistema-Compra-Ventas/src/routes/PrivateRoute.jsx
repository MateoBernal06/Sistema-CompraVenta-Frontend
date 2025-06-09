import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, rol }) => {
    const autenticado = localStorage.getItem('token');
    const userRol = localStorage.getItem('rol');
    return autenticado && userRol === rol ? children : <Navigate to="/" />;
};