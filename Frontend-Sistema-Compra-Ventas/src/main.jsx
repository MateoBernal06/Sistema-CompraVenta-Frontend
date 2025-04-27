// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/MainPages//LandingPage.jsx'
import Register from './pages/MainPages//Register.jsx';
import Login from './pages/MainPages//Login.jsx'
import Forgot from './pages/MainPages/Forgot.jsx';
import RestorePassword from './pages/MainPages/RestorePassword.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<LandingPage />*/}
    {/*<Register />*/}
    {/*<Forgot />*/}
    <RestorePassword />
    {/*<Login />*/}
  </StrictMode>,
)
