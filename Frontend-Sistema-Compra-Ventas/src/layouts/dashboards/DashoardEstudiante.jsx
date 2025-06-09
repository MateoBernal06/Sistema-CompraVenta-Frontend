import './styleDashboard.css';
import { TiThMenu } from "react-icons/ti";
import Logo from '../../assets/logos/logo-project.png'
import Button from 'rsuite/Button';
import { useState } from 'react';
import { Outlet } from "react-router-dom";


export const DashboardEstudiante = () => {
    return (
        <>
            <div className="sidebar">
                <img src={Logo} alt="Logo" className="logo" />
                <Button appearance="primary" className="menu-button">
                    <TiThMenu />
                </Button>
            </div>
            <div className="dashboard-estudiante">
                <h1>Dashboard Estudiante</h1>
                <p>Contenido específico para el dashboard del estudiante.</p>
            </div>
        </>
    );
}
