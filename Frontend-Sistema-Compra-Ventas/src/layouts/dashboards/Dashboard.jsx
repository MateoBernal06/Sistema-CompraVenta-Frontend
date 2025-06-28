import './styleDashboard.css';
import Button from 'rsuite/Button';
import Avatar from 'rsuite/Avatar';
import Logo from '../../assets/logos/logo-project.png'
import { TiThMenu } from "react-icons/ti";
import { SidebarComponent } from '../sidebar/SideBarComponent';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import { perfil } from '../../context/api/admin';
import Badge from 'rsuite/Badge';
import Whisper from 'rsuite/Whisper';
import Popover from 'rsuite/Tooltip';
import { useContext, useEffect } from "react";
import { UserContext } from '../../context/UserContext';

export const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
 
    useEffect(() => {
        const fetchNombre = async () => {
            try {
                const administrador = await perfil();
                if (administrador && administrador.nombre && administrador.apellido && administrador.email && administrador.celular && administrador.direccion && administrador.rol) {
                    setUser({
                        nombre: administrador.nombre,
                        apellido: administrador.apellido,
                        email: administrador.email,
                        celular: administrador.celular,
                        direccion: administrador.direccion,
                        rol: administrador.rol
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
                        <Whisper placement="bottom" trigger="click" speaker={userPopover}>
                            <Badge color='green'>
                                <Avatar color="red" bordered circle src="https://i.pravatar.cc/150?u=2" />
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
            <SidebarComponent visible={sidebarVisible} setVisible={setSidebarVisible} />
            <div className="dashboard-content">
                <Outlet />
            </div>
        </>
    );
};
