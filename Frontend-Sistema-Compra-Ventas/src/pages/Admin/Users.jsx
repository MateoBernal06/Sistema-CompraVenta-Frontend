import './styleAdmin.css';
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Button from 'rsuite/Button';
import Loader from 'rsuite/Loader';
import { TableUsers } from '../../layouts/tables/Tableusers';
import { obtenerEstudiantes, buscarEstudiante } from '../../context/api/estudiantes';
import { toast } from 'react-toastify';

export const UsersManagement = () => {

    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        setLoading(true);
        try {
            const data = await obtenerEstudiantes();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
        }finally{
            setLoading(false)
        }
    }


    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                toast.info("Email de usuario inválido");
                return;
            }

            const resultado = await buscarEstudiante(busqueda.trim());

            if (Array.isArray(resultado)) {
                setUsuarios(resultado);
            } else if (resultado) {
                setUsuarios([resultado]);
            } else {
                setUsuarios([]);
            }
        } catch (error) {
            console.error('Error al buscar estudiante:', error);
            setUsuarios([]);

        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        cargarUsuarios();
    }, []);

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
                        onClick={handleBuscar}
                    ><FaSearch size={16}/></Button>
                </div>
            </div>
            {loading ? (
                <div className="loading-container">
                    <Loader size="md" content="Cargando categorías..." />
                </div>
            ) : (
                <TableUsers
                    estudiantes={usuarios}
                    recargarUsuarios={cargarUsuarios}
                />
            )}
        </>
    )
}