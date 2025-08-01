import { CardPublication } from "../../layouts/card/CardPublication";
import { obtenerPublicaciones } from "../../context/api/publicaciones";
import { obtenerCategorias } from "../../context/api/categorias";
import { useState, useEffect } from 'react';
import Loader from 'rsuite/Loader';
import { FaSearch } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import Button from 'rsuite/Button';
import { buscarPublicacion } from "../../context/api/publicaciones";
import { DrawerDetalles } from "../../layouts/drawer/DrawerDetalles";;
import './stylesStudents.css'
import { toast } from 'react-toastify';

export const ViewPost = () => {

    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);
    const [publicacionesOriginales, setPublicacionesOriginales] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

    const cargarPublicaciones = async () => {
        setLoading(true);
        try {
            const data = await obtenerPublicaciones();
            setPublicaciones(data);
            setPublicacionesOriginales(data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        } finally {
            setLoading(false);
        }
    };

    const cargarCategorias = async () => {
        try {
            const data = await obtenerCategorias();
            setCategorias(data);
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }
    };

    const handleFiltrarPorCategoria = (categoriaId) => {
        setCategoriaSeleccionada(categoriaId);
        setBusqueda(''); 
        
        if (categoriaId === '') {
            setPublicaciones(publicacionesOriginales);
        } else {
            // Filtrar por categoría seleccionada
            const publicacionesFiltradas = publicacionesOriginales.filter(pub => {
                const pubCategoriaId = pub.categoria?._id || pub.categoria;
                return pubCategoriaId === categoriaId;
            });
            setPublicaciones(publicacionesFiltradas);
        }
    };



    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                toast.info("Nombre de publicación inválido");
                return;
            }

            setCategoriaSeleccionada('');
            const terminoBusqueda = busqueda.trim().toLowerCase();
            
            const resultado = await buscarPublicacion(terminoBusqueda);

            if (Array.isArray(resultado) && resultado.length > 0) {
                setPublicaciones(resultado);
            } else if (resultado && !Array.isArray(resultado)) {
                setPublicaciones([resultado]);
            } else {
                const coincidencias = publicacionesOriginales.filter(pub => {
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

    useEffect(() => {
        cargarPublicaciones();
        cargarCategorias();
    }, []);

    return (
        <>
            <div className="search-container">
                {busqueda && (
                    <Button 
                        appearance="primary"
                        color='orange' 
                        className='clear-button'
                        onClick={() => {
                            setBusqueda('');
                            setCategoriaSeleccionada('');
                            setPublicaciones(publicacionesOriginales);
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

            <div className="filter-container">
                <div className="category-filter">
                    <label htmlFor="categoria-filter">
                        <BiCategory size={20} className="icon" />
                        <b>Filtrar por categoría </b>
                    </label>
                    <select
                        id="categoria-filter"
                        className="category-select"
                        value={categoriaSeleccionada}
                        onChange={(e) => handleFiltrarPorCategoria(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {categorias.map(cat => (
                            <option key={cat._id} value={cat._id} className='categorias-list'>
                                {cat.nombre}
                            </option>
                        ))}
                    </select>
                    {categoriaSeleccionada && (
                        <Button 
                            appearance="primary"
                            color="red" 
                            size="sm"
                            className='clear-button'
                            onClick={() => handleFiltrarPorCategoria('')}
                        >
                            Volver
                        </Button>
                    )}
                </div>
            </div>
            
            <div className="publicaciones-container">
                {loading ? (
                    <Loader center content="Cargando publicaciones..." />
                ) : publicaciones.length === 0 ? (
                    <p className="mensaje-disponibles-view">No hay publicaciones disponibles.</p>
                ) : (
                    publicaciones.map((publicacion) => (
                        <CardPublication 
                            key={publicacion._id || publicacion.id} 
                            {...publicacion}
                            onVerDetalles={() => {
                                setPublicacionSeleccionada(publicacion);
                                setOpenDrawer(true);
                            }} 
                        />
                    ))
                )}
            </div>
            <DrawerDetalles
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                publicacion={publicacionSeleccionada}
            />
        </>
    );
};
