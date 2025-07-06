import './styleAdmin.css';
import { TableCategory } from '../../layouts/tables/TableCategory';
import { BiSolidCategory } from "react-icons/bi";
import Button from 'rsuite/Button';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";
import { ModalAgregar } from '../../layouts/modals/modalsCategorias/ModalAgregar';
import { useState, useEffect } from 'react';
import { 
        obtenerCategorias, 
        buscarCategoria, 
        inactivarCategorias 
    } from '../../context/api/categorias';
import Loader from 'rsuite/Loader';
import { toast } from 'react-toastify';

export const CategorysManagement = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);

    const cargarCategorias = async () => {
        setLoading(true);
        try {
            const data = await obtenerCategorias();
            setCategorias(data);
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }finally{
            setLoading(false)
        }
    };

    const manejarInactivar = async (id) => {
        try {
            await inactivarCategorias(id);
            setCategorias(prev =>
                prev.map(cat =>
                    cat._id === id ? { ...cat, estado: !cat.estado } : cat
                )
            );
            toast.success("Estado actualizado correctamente");
        } catch (error) {
            toast.error("Error al actualizar el estado");
        }
    };

    const handleUpdateCategoria = (categoriaActualizada) => {
        setCategorias(prev =>
            prev.map(cat =>
                cat._id === categoriaActualizada._id ? categoriaActualizada : cat
            )
        );
        cerrarModalEditar();
        toast.success("Categoría actualizada");
    };

    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                toast.info("Nombre de categoria invalida")
                return;
            }

            const terminoBusqueda = busqueda.trim().toLowerCase();
            
            const resultado = await buscarCategoria(terminoBusqueda);

            if (Array.isArray(resultado) && resultado.length > 0) {
                setCategorias(resultado);
            } else if (resultado && !Array.isArray(resultado)) {
                setCategorias([resultado]);
            } else {
                // Si no encuentra resultados exactos, buscar coincidencias parciales
                // en todas las categorías
                const todasLasCategorias = await obtenerCategorias();
                const coincidencias = todasLasCategorias.filter(cat => {
                    const nombreCoincide = cat.nombre?.toLowerCase().includes(terminoBusqueda);
                    return nombreCoincide;
                });

                if (coincidencias.length > 0) {
                    setCategorias(coincidencias);
                    toast.success(`Se encontraron ${coincidencias.length} coincidencia(s)`);
                } else {
                    setCategorias([]);
                    toast.info("No se encontraron categorías que coincidan con la búsqueda");
                }
            }
        } catch (error) {
            console.error('Error al buscar categoría:', error);
            toast.error("Error al realizar la búsqueda");
            setCategorias([]);
            
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarCategorias();
    }, []);

    return (
        <>
            <div>
                <h2 className="category-title">
                    <BiSolidCategory size={24}/> Gestión de Categorías
                </h2>
                <p className="category-description">
                    Administra y organiza las categorías de productos disponibles en el sistema. 
                    Desde aquí puedes crear, editar o inactivar categorías para mantener el catálogo 
                    bien estructurado y facilitar la navegación de los usuarios.
                </p>
            </div>

            <div className='user-actions'>
                <div>
                    <Button 
                        appearance="primary" 
                        className='button-create-category'
                        onClick={() => setShowModal(true)}
                    >
                        <IoMdAddCircleOutline size={24} color="#fff" className='icon'/>
                        Crear nueva categoría
                    </Button>
                </div>
                <div className="search-container">
                    {busqueda && (
                        <Button 
                            appearance="primary"
                            color='orange' 
                            className='clear-button'
                            onClick={() => {
                                setBusqueda('');
                                cargarCategorias();
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
                        placeholder="Ingresa el nombre de la categoría" 
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
            </div>
            {loading ? (
                <div className="loading-container">
                    <Loader size="md" content="Cargando categorías..." />
                </div>
            ) : (
                <TableCategory 
                    categorias={categorias} 
                    onInactivar={manejarInactivar}
                    onUpdateCategoria={handleUpdateCategoria}
                />
            )}

            <ModalAgregar
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={(nuevaCategoria) => {
                    setCategorias(prev => [nuevaCategoria, ...prev]);
                    setShowModal(false);
                }}
            />
        </>
    );
};
