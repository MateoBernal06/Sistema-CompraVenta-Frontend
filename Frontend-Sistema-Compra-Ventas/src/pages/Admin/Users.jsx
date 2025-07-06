import './styleAdmin.css';
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";
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
                toast.info("Datos del usuario inválidos");
                return;
            }

            const terminoBusqueda = busqueda.trim().toLowerCase();
            
            const resultado = await buscarEstudiante(terminoBusqueda);

            if (Array.isArray(resultado) && resultado.length > 0) {
                setUsuarios(resultado);
            } else if (resultado && !Array.isArray(resultado)) {
                setUsuarios([resultado]);
            } else {
                // Si no encuentra resultados exactos, buscar coincidencias parciales
                // en todos los usuarios por nombre, apellido o email
                const todosLosUsuarios = await obtenerEstudiantes();
                const coincidencias = todosLosUsuarios.filter(user => {
                    const nombreCoincide = user.nombre?.toLowerCase().includes(terminoBusqueda);
                    const apellidoCoincide = user.apellido?.toLowerCase().includes(terminoBusqueda);
                    const emailCoincide = user.email?.toLowerCase().includes(terminoBusqueda);
                    
                    return nombreCoincide || apellidoCoincide || emailCoincide;
                });

                if (coincidencias.length > 0) {
                    setUsuarios(coincidencias);
                    toast.success(`Se encontraron ${coincidencias.length} coincidencia(s)`);
                } else {
                    setUsuarios([]);
                    toast.info("No se encontraron usuarios que coincidan con la búsqueda");
                }
            }
        } catch (error) {
            console.error('Error al buscar estudiante:', error);
            toast.error("Error al realizar la búsqueda");
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
                <div className="search-container">
                    {busqueda && (
                        <Button 
                            appearance="primary"
                            color='orange' 
                            className='clear-button'
                            onClick={() => {
                                setBusqueda('');
                                cargarUsuarios();
                            }}
                        >
                            <SlArrowLeftCircle size={20} className="btn-icon" /> 
                            Volver
                        </Button>
                    )}
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Buscar por nombre, apellido o email..." 
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
                    <Loader size="md" content="Cargando usuarios..." />
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