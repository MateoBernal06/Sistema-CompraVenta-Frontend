// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute.jsx';
import { UserProvider } from './context/UserContext.jsx';


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
import { CategorysManagement } from './pages/Admin/Categorys.jsx';
import { UsersManagement } from './pages/Admin/Users.jsx';
import { PostManagement } from './pages/Admin/Post.jsx';
import { Update } from './pages/Admin/Update.jsx';

// Dashboard Estudiante
import { DashboardEstudiante } from './layouts/dashboards/DashoardEstudiante.jsx'; 
import { ViewPost } from './pages/Estudiantes/ViewPost.jsx';
import { MyPost } from './pages/Estudiantes/MyPost.jsx';
import { UpdateInformation } from './pages/Estudiantes/UpdateInformation.jsx';



function App() {
  return (
    <>
      <UserProvider>
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

          <Route path="/dashboard" element={
            <PrivateRoute rol="administrador">
              <Dashboard />
            </PrivateRoute>
          }>
            <Route path="perfil" element={<h1>jj</h1>} />
            <Route path="gestion-usuarios" element={<UsersManagement />} />
            <Route path="gestion-publicaciones" element={<PostManagement />} />
            <Route path="gestion-categorias" element={<CategorysManagement />} />
            <Route path="actualizar-informacion" element={<Update />} />
          </Route>

          <Route path="/estudiante" element={
            <PrivateRoute rol="estudiante">
              <DashboardEstudiante />
            </PrivateRoute>
          }>
            <Route path="perfil" element={<h1>Perfil Estudiante</h1>} />
            <Route path="publicaciones" element={<ViewPost />} />
            <Route path="gestion-publicaciones" element={<MyPost />} />
            <Route path="actualizar-informacion" element={<UpdateInformation />} />
          </Route>

        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
      </UserProvider>
    </>
  )
}
export default App
