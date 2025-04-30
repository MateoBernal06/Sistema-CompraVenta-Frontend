// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Usuario
import LandingPage from './pages/mainPages/LandingPage.jsx'
import Register from './pages/mainPages/Register.jsx';
import Login from './pages/mainPages/Login.jsx'
import Forgot from './pages/mainPages/Forgot.jsx';
import RestorePassword from './pages/mainPages/RestorePassword.jsx';
import NotFound from './pages/mainPages/NotFound.jsx';
import DashboardAdmin from './layouts/dashboards/DashboardAdmin.jsx';
import Auth from './layouts/Auth.jsx';

// Dashboard Admin
import { GestionPerfil } from './pages/admin/gestion perfil/GestionPerfil.jsx'
import { GestionUsuarios } from './pages/admin/GestionUsuarios.jsx'
import { GestionProductos } from './pages/admin/GestionProductos.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Auth />}>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/restore-password" element={<RestorePassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="dashboard/*" element={<DashboardAdmin />}>
            <Route path="gestion-perfil" element={<GestionPerfil />} />
            <Route path="gestion-usuarios" element={<GestionUsuarios />} />
            <Route path="gestion-productos" element={<GestionProductos />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
