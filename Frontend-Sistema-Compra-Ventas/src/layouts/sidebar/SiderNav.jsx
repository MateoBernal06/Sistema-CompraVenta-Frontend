import { useNavigate } from 'react-router-dom';
import './styleSide.css'
import { useState } from 'react';
import { Nav,Col } from 'rsuite';


const CustomNav = ({ active, onSelect, ...props }) => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        navigate('/login');
    };

    return (
        <div className='nav-class'>
            <Nav 
                {...props} 
                vertical 
                activeKey={active} 
                onSelect={(eventKey) => {
                    onSelect(eventKey);
                    navigate(`/${eventKey}`);
                }} 
                className='options-nav'>
                    <Nav.Item eventKey="dashboard/gestion-perfil" className='nav-section'>
                        Gestion del perfil
                    </Nav.Item>
                    <Nav.Item eventKey="dashboard/gestion-usuarios" className='nav-section'>
                        Gestion de usuarios
                    </Nav.Item>
                    <Nav.Item eventKey="dashboard/gestion-productos" className='nav-section'>
                        Gestion de productos
                    </Nav.Item>
                    <Nav.Item onClick={handleLogout} id="logout" className='nav-section'>
                        Salir del sistema
                    </Nav.Item>
            </Nav>
        </div>
    );
};

export const SiderNav = ({ active, onSelect, ...props }) => {
    const [activeKey, setActiveKey] = useState('dashboard/gestion-perfil');
    return (
        <Col md={4}>
            <CustomNav appearance="pills" reversed active={activeKey} onSelect={setActiveKey} />
        </Col>
    );
};

