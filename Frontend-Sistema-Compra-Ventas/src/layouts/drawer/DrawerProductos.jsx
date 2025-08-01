import Drawer from 'rsuite/Drawer';
import { useEffect, useState } from 'react';
import { obtenerCategorias } from '../../context/api/categorias';
import { TbListDetails } from "react-icons/tb";
import './stylesDrawer.css'

export const DrawerProductos = ({open, onClose, publicacion}) => {
    const [categoriaNombre, setCategoriaNombre] = useState('');
    
    useEffect(() => {
        const cargarCategoria = async () => {
            if (open && publicacion && publicacion.categoria) {
                try {
                    // Si ya es un objeto con nombre
                    if (typeof publicacion.categoria === 'object' && publicacion.categoria.nombre) {
                        setCategoriaNombre(publicacion.categoria.nombre);
                        return;
                    }
                    
                    // Si es un ID string
                    if (typeof publicacion.categoria === 'string') {
                        const categorias = await obtenerCategorias();
                        const encontrada = categorias.find(cat => cat._id === publicacion.categoria);
                        setCategoriaNombre(encontrada ? encontrada.nombre : publicacion.categoria);
                    }
                } catch (error) {
                    setCategoriaNombre(publicacion.categoria || 'Sin categoría');
                }
            }
        };
        
        cargarCategoria();
    }, [open, publicacion]);

    if (!publicacion) return null;
    return (
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container'>
                <Drawer.Header>
                    <Drawer.Title>Detalles de la Publicación</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    <div>
                        <p className='titulo-detalle'>
                            <b>{publicacion.titulo}</b>
                        </p>
                        <div className='imagen-detalle-container'>
                            <img
                                src={publicacion.imagen}
                                alt={publicacion.titulo}
                                loading='lazy'
                                className='imagen-detalle'
                            />
                        </div>
                    </div>
                    <div className='detalles'>
                        <div>
                            <p className='datos-detalles'>
                                <TbListDetails size={20}/> <b>Detalles</b>
                            </p>
                            <ul className='vendedor'>
                                <li className='vendedor-options'>
                                    <b>Descripción</b>
                                    <p className='descripcion-publicacion'>{publicacion.descripcion}</p>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Categoría</b>
                                    <p className='option-categoria'>{categoriaNombre || publicacion.categoria?.nombre || publicacion.categoria || 'Cargando...'}</p>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Precio: </b>${publicacion.precio}
                                </li>
                                <li className='vendedor-options'>
                                    <b>{publicacion.disponible ? 'Disponible' : 'No disponible'}</b>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Fecha de publicación</b>
                                    <p className='option-categoria'>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    );
}

