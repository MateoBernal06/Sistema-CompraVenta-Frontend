import { useNavigate } from 'react-router-dom';
import './styleSide.css'
import { useState } from 'react';
import Nav from 'rsuite/Nav';
import Col from 'rsuite/Col';

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
                    if(eventKey){
                        onSelect(eventKey);
                        navigate(`/${eventKey}`);
                    }
                }} 
                className='options-nav'>
                <Nav.Item eventKey="dashboard/perfil" className='nav-section'>
                    Gestion del perfil
                </Nav.Item>
                <Nav.Menu title="Gestion de usuarios" className='nav-section-sub'> 
                    <Nav.Item eventKey="dashboard/usuarios" className='nav-section-options'>Ver usuarios</Nav.Item>
                    <Nav.Item eventKey="dashboard/usuarios/suspendidos" className='nav-section-options'>Usuarios suspendidos</Nav.Item>
                </Nav.Menu>
                
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
    const [activeKey, setActiveKey] = useState('dashboard/perfil');
    return (
        <Col md={4}>
            <CustomNav appearance="pills" reversed active={activeKey} onSelect={setActiveKey} />
        </Col>
    );
};

