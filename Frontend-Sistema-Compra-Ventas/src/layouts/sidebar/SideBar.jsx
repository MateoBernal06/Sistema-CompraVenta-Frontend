import { useNavigate } from 'react-router-dom';
import './styleSide.css';
import { Sidebar } from 'primereact/sidebar';
import Button from 'rsuite/Button';
import { FaCircleUser } from 'react-icons/fa6';
import { BiSolidCategory } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export const SideBar = ({ visible, setVisible }) => {

    const navigate = useNavigate();

    return (
        <>
            <Sidebar className='style-sidebar' visible={visible} onHide={() => setVisible(false)} >
                <div className='style-sidebar-content'>
                    <div className="sidebar-config-section">
                        <BsFilePost size={24} color="#fff"/>
                        <span className="sidebar-config-title">Publicaciones</span>
                        <ul className="sidebar-config-list">
                            <li className='sidebar-config-item'>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => navigate('/dashboard/crear-publicacion')}
                                >
                                    Crear Publicación
                                </Button>
                            </li>
                            <li className='sidebar-config-item'>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => navigate('/dashboard/gestion-publicaciones')}
                                >
                                    Mis Publicaciones
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-config-section">
                        <FaShoppingCart size={24} color="#fff"/>
                        <span className="sidebar-config-title">Articulos y servicios</span>
                        <Button 
                            className='sidebar-button' 
                            appearance="ghost"
                            onClick={() => navigate('/dashboard/gestion-productos')}
                        >
                            Ver publicaciones
                        </Button>
                    </div>

                    <div className="sidebar-config-section">
                        <FaUserGear size={24} color="#fff"/>
                        <span className="sidebar-config-title">Configuración</span>
                        <ul className="sidebar-config-list">
                            <li>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => navigate('/actualizar-informacion')}
                                >
                                    Actualizar información personal
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => navigate('/dashboard/actualizar-contraseña')}
                                >
                                    Actualizar contraseña
                                </Button>
                            </li>
                        </ul>
                    </div>   
                </div>
            </Sidebar>
        </>
    );
};
