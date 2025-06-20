import { useNavigate } from 'react-router-dom';
import './styleSide.css';
import { Sidebar } from 'primereact/sidebar';
import Button from 'rsuite/Button';
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
                        <Button 
                            className='sidebar-button' 
                            appearance="ghost"
                            onClick={() => {
                                navigate('/estudiante/gestion-publicaciones')
                                setVisible(false);
                            }}
                        >
                            Mis Publicaciones
                        </Button>
                    </div>

                    <div className="sidebar-config-section">
                        <FaShoppingCart size={24} color="#fff"/>
                        <span className="sidebar-config-title">Articulos y servicios</span>
                        <Button 
                            className='sidebar-button' 
                            appearance="ghost"
                            onClick={() => {
                                navigate('/estudiante/publicaciones')
                                setVisible(false);
                            }}
                        >
                            Ver publicaciones
                        </Button>
                    </div>

                    <div className="sidebar-config-section">
                        <FaUserGear size={24} color="#fff"/>
                        <span className="sidebar-config-title">Configuración del perfil</span>
                        <ul className="sidebar-config-list">
                            <li>
                                <Button 
                                    className='sidebar-button' 
                                    appearance="ghost"
                                    onClick={() => {
                                        navigate('/estudiante/actualizar-informacion')
                                        setVisible(false);
                                    }}
                                >
                                    Actualizar información personal
                                </Button>
                            </li>
                        </ul>
                    </div>   
                </div>
            </Sidebar>
        </>
    );
};
