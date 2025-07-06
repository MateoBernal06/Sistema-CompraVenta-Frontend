import './styleAdmin.css';
import { TableProducts } from '../../layouts/tables/TableProducts';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import Button from 'rsuite/Button';
import { useState, useEffect } from 'react';
import Loader from 'rsuite/Loader';
import { 
    obtenerPublicaciones, 
    publicacionInactiva,
    buscarPublicacion
} 
from '../../context/api/publicaciones';
import { toast } from 'react-toastify';
import { SlArrowLeftCircle } from "react-icons/sl";

export const PostManagement = () => {

    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);

    const cargarPublicaciones = async () => {
        setLoading(true);
        try {
            const data = await obtenerPublicaciones();
            setPublicaciones(data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        }finally{
            setLoading(false)
        }
    }

    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                toast.info("Nombre de publicación inválido");
                return;
            }

            const terminoBusqueda = busqueda.trim().toLowerCase();
            
            const resultado = await buscarPublicacion(terminoBusqueda);

            if (Array.isArray(resultado) && resultado.length > 0) {
                setPublicaciones(resultado);
            } else if (resultado && !Array.isArray(resultado)) {
                setPublicaciones([resultado]);
            } else {
                const todasLasPublicaciones = await obtenerPublicaciones();
                const coincidencias = todasLasPublicaciones.filter(pub => {
                    const tituloCoincide = pub.titulo?.toLowerCase().includes(terminoBusqueda);
                    return tituloCoincide;
                });

                if (coincidencias.length > 0) {
                    setPublicaciones(coincidencias);
                } else {
                    setPublicaciones([]);
                }
            }
        } catch (error) {
            console.error('Error al buscar publicación:', error);
            toast.error("Error al realizar la búsqueda");
            setPublicaciones([]);
        } finally {
            setLoading(false);
        }
    }

    const manejarInactivar = async (id) => {
        try {
            await publicacionInactiva(id);
            setPublicaciones(prev =>
                prev.map(pub =>
                    pub._id === id ? { ...pub, estado: !pub.estado } : pub
                )
            );
            toast.success("Estado actualizado correctamente");
        } catch (error) {
            toast.error("Error al actualizar el estado");
        }
    };

    useEffect(() => {
        cargarPublicaciones();
    }, []);

    return (
        <>
            <div>
                <h2 className="category-title">
                    <BsFillFileEarmarkPostFill size={24}/> Gestión de Publicaciones
                </h2>
                <p className="category-description">
                    Administra y organiza las publicaciones disponibles en el sistema. Desde este apartado 
                    puedes inactivar aquellas que infrinjan las normas, con el objetivo de mantener un espacio 
                    óptimo y seguro para el comercio.
                </p>
            </div>

            <div className="search-container">
                {busqueda && (
                    <Button 
                        appearance="primary"
                        color='orange' 
                        className='clear-button'
                        onClick={() => {
                            setBusqueda('');
                            cargarPublicaciones();
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
                    placeholder="Ingresa el nombre de un producto" 
                    className='search-users'
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleBuscar(); }}
                />
                <Button 
                    appearance="primary" 
                    className='search-button'
                    onClick={handleBuscar}
                >
                    <FaSearch size={16}/>
                </Button>
            </div>
            {loading ? (
                <div className="loading-container">
                    <Loader size="md" content="Cargando categorías..." />
                </div>
            ) : (
                <TableProducts
                    publicaciones={publicaciones}
                    onInactivar={manejarInactivar}
                />
            )}
        </>
    );
}
