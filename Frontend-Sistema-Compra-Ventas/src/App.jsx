// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/MainPages/LandingPage.jsx'
import Register from './pages/MainPages/Register.jsx';
import Login from './pages/MainPages/Login.jsx'
import Forgot from './pages/MainPages/Forgot.jsx';
import RestorePassword from './pages/MainPages/RestorePassword.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/restore-password" element={<RestorePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
