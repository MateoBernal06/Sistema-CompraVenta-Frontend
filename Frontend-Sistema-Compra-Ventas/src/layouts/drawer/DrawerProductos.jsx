import Drawer from 'rsuite/Drawer';
import './stylesDrawer.css'

export const DrawerProductos = ({open, onClose, publicacion}) => {
    if (!publicacion) return null;
    return (
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container'>
                <Drawer.Header>
                    <Drawer.Title>Detalles de la Publicacion</Drawer.Title>
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
                            <p className='datos-detalles'>Detalles</p>
                            <ul className='vendedor'>
                                <li className='vendedor-options'>
                                    <b>Descripción: </b>{publicacion.descripcion} 
                                </li>
                                <li className='vendedor-options'>
                                    <b>Categoría: </b>{publicacion.categoria?.nombre || publicacion.categoria}
                                </li>
                                <li className='vendedor-options'>
                                <b>Precio: </b>${publicacion.precio}
                                </li>
                                <li className='vendedor-options'>
                                    <b>{publicacion.disponible ? 'Disponible' : 'No disponible'}</b>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Fecha de publicación: </b>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    );
}

