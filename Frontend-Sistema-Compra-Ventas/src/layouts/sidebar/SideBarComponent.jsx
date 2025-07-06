
import { Sidebar } from 'primereact/sidebar';
import './styleSide.css';
import Button from 'rsuite/Button';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { BiSolidCategory } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";


export const SidebarComponent = ({ visible, setVisible }) => {
    const navigate = useNavigate();

    return (
        <> 
            <Sidebar className='style-sidebar' visible={visible} onHide={() => setVisible(false)} >
                <div className='style-sidebar-content'>

                    <div className="sidebar-config-section">
                        <FaCircleUser size={24} color="#fff"/>
                        <span className="sidebar-config-title">Usuarios</span>
                        <Button 
                            className='sidebar-button' 
                            appearance="ghost"
                            onClick={() => {
                                navigate('/dashboard/gestion-usuarios')
                                setVisible(false);
                            }}
                        >
                            Gestión de Usuarios
                        </Button>
                    </div>

                    <div className="sidebar-config-section">
                        <BsFilePost size={24} color="#fff"/>
                        <span className="sidebar-config-title">Publicaciones</span>
                        <Button 
                        className='sidebar-button' 
                        appearance="ghost"
                        onClick={() => {
                            navigate('/dashboard/gestion-publicaciones')
                            setVisible(false);
                        }}
                        >
                            Gestión de Publicaciones
                        </Button>
                    </div>

                    <div className="sidebar-config-section">
                        <BiSolidCategory size={24} color="#fff"/>
                        <span className="sidebar-config-title">Categorías</span>
                        <Button 
                            className='sidebar-button' 
                            appearance="ghost"
                            onClick={() => {
                                navigate('/dashboard/gestion-categorias')
                                setVisible(false);
                            }}
                        >
                            Gestión de Categorías
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
                                    onClick={() => {
                                        navigate('/dashboard/actualizar-informacion')
                                        setVisible(false);
                                    }}
                                >
                                    Actualizar datos
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => {
                                        navigate('/dashboard/cambiar-contrasena')
                                        setVisible(false);
                                    }}
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
