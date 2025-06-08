import './styleAdmin.css';
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Button from 'rsuite/Button';
import Loader from 'rsuite/Loader';
import { TableUsers } from '../../layouts/tables/Tableusers';

export const UsersManagement = () => {

    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [usuarios, setUsuarios] = useState([]);


    return(
        <>
            <div>
                <h2 className="category-title">
                    <FaUserAlt size={24}/> Gestión de Usuarios
                </h2>
                <p className="category-description">
                    Administra y organiza a los usuarios registrados en el sistema. Desde este módulo, 
                    puedes visualizar las publicaciones de los usuarios e inactivarlos cuando sea necesario, 
                    con el fin de garantizar un espacio óptimo para el comercio.
                </p>
            </div>

            <div className='user-actions-buscador'>
                <div>
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Ingresa el correo del usuario" 
                        className='search-users-input'
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleBuscar(); }}
                    />
                    <Button 
                        appearance="primary" 
                        className='search-button'
                        //onClick={handleBuscar}
                    ><FaSearch size={16}/></Button>
                </div>
            </div>
            {loading ? (
                <div className="loading-container">
                    <Loader size="md" content="Cargando categorías..." />
                </div>
            ) : (
                <TableUsers
                    usuarios={usuarios}
                    ///recargarUsuarios={cargarUsuarios}
                />
            )}
        </>
    )
}