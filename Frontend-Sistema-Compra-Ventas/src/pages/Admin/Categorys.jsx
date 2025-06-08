import './styleAdmin.css';
import { TableCategory } from '../../layouts/tables/TableCategory';
import { BiSolidCategory } from "react-icons/bi";
import Button from 'rsuite/Button';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { ModalAgregar } from '../../layouts/modals/modalsCategorias/ModalAgregar';
import { useState, useEffect } from 'react';
import { obtenerCategorias, buscarCategoria } from '../../context/api/categorias';
import Loader from 'rsuite/Loader';

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

    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                await cargarCategorias();
                return;
            }

            const resultado = await buscarCategoria(busqueda.trim());

            if (Array.isArray(resultado)) {
                setCategorias(resultado);
            } else if (resultado) {
                setCategorias([resultado]);
            } else {
                setCategorias([]);
            }
        } catch (error) {
            console.error('Error al buscar categoría:', error);
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
                <div>
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
                    ><FaSearch size={16}/></Button>
                </div>
            </div>
            {loading ? (
                <div className="loading-container">
                    <Loader size="md" content="Cargando categorías..." />
                </div>
            ) : (
                <TableCategory 
                    categorias={categorias} 
                    recargarCategorias={cargarCategorias} 
                />
            )}

            <ModalAgregar
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    cargarCategorias();
                }}
            />
        </>
    );
};
