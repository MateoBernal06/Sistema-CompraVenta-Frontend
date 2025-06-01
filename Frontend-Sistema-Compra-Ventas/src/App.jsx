// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Main Pages
import { LandingPage } from './pages/MainPages/LandingPage.jsx';
import Forgot from './pages/MainPages/Forgot.jsx';
import RestorePassword from './pages/MainPages/RestorePassword.jsx';
import NotFound from './pages/MainPages/NotFound.jsx';
import Auth from './layouts/Auth.jsx';
import { Confirmar } from './components/User/PageConfirmar.jsx';
import { Cambiar } from './components/User/PageCambio.jsx';


// Dashboard Admin
import { Dashboard } from './layouts/dashboards/Dashboard.jsx';
import { ProfileManagement } from './pages/Admin/profile/profileManagement.jsx'
import { UserManagement } from './pages/Admin/user/UserManagement.jsx'
import { ProductsManagement } from './pages/Admin/products/ProductsManagement.jsx'
import { CategorysManagement } from './pages/Admin/Categorys.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Auth />}>
            <Route index element={<LandingPage />} />
            <Route path="/confirmar/:token" element={<Confirmar />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/comprobar-token/:token" element={<Cambiar />} />
            <Route path="/nuevo-password/:token" element={<RestorePassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="perfil" element={<ProfileManagement />} />
            <Route path="gestion-usuarios" element={<UserManagement />} />
            <Route path="gestion-publicaciones" element={<ProductsManagement />} />
            <Route path="gestion-categorias" element={<CategorysManagement />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
