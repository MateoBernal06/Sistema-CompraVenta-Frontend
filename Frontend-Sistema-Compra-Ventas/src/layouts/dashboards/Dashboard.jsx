import './styleDashboard.css';
import Button from 'rsuite/Button';
import Avatar from 'rsuite/Avatar';
import Logo from '../../assets/logos/logo-project.png'
import { TiThMenu } from "react-icons/ti";
import { SidebarComponent } from '../sidebar/SiderbarComponent';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";

export const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('nombre');
        navigate('/');
    };

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
                        <Avatar color="red" bordered circle src="https://i.pravatar.cc/150?u=1" />
                        <p className='dashboard-welcome-message'>Bienvenido Mateo Bernal</p>
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
