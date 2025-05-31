
import { Sidebar } from 'primereact/sidebar';
import './styleSide.css';

export const SidebarComponent = ({ visible, setVisible }) => {

    return (
        <> 
            <Sidebar className='style-sidebar' visible={visible} onHide={() => setVisible(false)} >
                <div className='style-sidebar-content'>
                    <div>
                        <p>Gestion de Usuarios</p>
                    </div>
                    <div>
                        <p>Gestion de Publicaciones</p>
                    </div>
                    <div>
                        <p>Gestion de categorias</p>
                    </div>
                    <div className="sidebar-config-section">
                        <p className="sidebar-config-title">Configuración de Perfil</p>
                        <ul className="sidebar-config-list">
                            <li>
                                Actualizar contraseña
                            </li>
                            <li>
                                Actualizar información personal
                            </li>
                        </ul>
                    </div>   
                </div>
            </Sidebar>
        </>
    );
};
