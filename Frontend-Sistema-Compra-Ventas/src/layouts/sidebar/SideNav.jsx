

import './styleSide.css'
import { useState } from 'react';
import { Nav,Col } from 'rsuite';
import Logo from '../../assets/logos/logo-project.png'

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <div className='nav-class'>
            <img src={Logo} alt="Logo" className='logo-project'/>
            <Nav {...props} vertical activeKey={active} onSelect={onSelect} className='options-nav'>
                <Nav.Item eventKey="gestion-perfil" className='nav-section'>Gestion del perfil</Nav.Item>
                <Nav.Item eventKey="gestion-usuarios" className='nav-section'>Gestion de usuarios</Nav.Item>
                <Nav.Item eventKey="gestion-productos" className='nav-section'>Gestion de productos</Nav.Item>
                <Nav.Item eventKey="salir" className='nav-section'>Salir del sistema</Nav.Item>
            </Nav>
        </div>
    );
};

export const SideNav = ({ active, onSelect, ...props }) => {
    const [activeKey, setActiveKey] = useState('gestion-perfil');
    return (
        <Col md={4}>
            <CustomNav appearance="pills" reversed active={activeKey} onSelect={setActiveKey} />
        </Col>
    );
};

