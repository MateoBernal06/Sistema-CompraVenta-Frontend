import './styleDashboard.css';
import { TiThMenu } from "react-icons/ti";
import Logo from '../../assets/logos/logo-project.png'
import Button from 'rsuite/Button';
import { useState, useEffect, useContext } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import Avatar from 'rsuite/Avatar';
import { SideBar } from '../sidebar/SideBar';
import { perfilEstudiante } from '../../context/api/estudiantes';
import { UserContext } from '../../context/UserContext';
import Badge from 'rsuite/Badge';
import Whisper from 'rsuite/Whisper';
import Popover from 'rsuite/Tooltip';

export const DashboardEstudiante = () => {
    
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchNombre = async () => {
            try {
                const estudiante = await perfilEstudiante();
                if (estudiante && estudiante.nombre && estudiante.apellido && estudiante.email && estudiante.celular && estudiante.direccion && estudiante.rol) {
                    setUser({
                        nombre: estudiante.nombre,
                        apellido: estudiante.apellido,
                        email: estudiante.email,
                        celular: estudiante.celular,
                        direccion: estudiante.direccion,
                        rol: estudiante.rol
                    });
                }
            } catch (error) {
                setUser({
                    nombre: '',
                    apellido: '',
                    email: '',
                    celular: '',
                    direccion: '',
                    rol: ''
                });
            }
        };
        fetchNombre();
    }, [setUser]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        navigate('/');
    };

    const userPopover = (
        <Popover title="Datos del usuario" className='dashboard-popover'>
            <p className='dashboard-popover-title'>Bienvenido, {user.nombre}</p>
            <div>
                <p><b>Nombre:</b> {user.nombre}</p>
                <p><b>Apellido:</b> {user.apellido}</p>
                <p><b>Rol:</b> {user.rol}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Celular:</b> {user.celular}</p>
                <p><b>Dirección:</b> {user.direccion}</p>
            </div>
        </Popover>
    );

    return (
        <>
            <div className="dashboard">
                <div className='dashboard-icon-menu' onClick={() => setSidebarVisible(true)}>
                    <TiThMenu color="white" size={32}/>
                </div>
                <div>
                    <img className='dashboard-logo' src={Logo} alt="Logo" />
                </div>
                <div className='dashboard-options-exit'>
                    <div className='dashboard-icon'>
                        <Whisper placement="bottom" trigger="hover" speaker={userPopover}>
                            <Badge color='green'>
                                <Avatar color="blue" bordered circle src="https://i.pravatar.cc/150?u=5" />
                            </Badge>
                        </Whisper>
                    </div>
                    <Button 
                        onClick={handleLogout} 
                        className='dashboard-button-exit' 
                        color='red' 
                        appearance="primary">
                            <ImExit size={24} color="#fff"/>
                    </Button>
                </div>
            </div>
            <SideBar visible={sidebarVisible} setVisible={setSidebarVisible} />
            <div className="dashboard-content">
                <Outlet />
            </div>
        </>
    );
}
