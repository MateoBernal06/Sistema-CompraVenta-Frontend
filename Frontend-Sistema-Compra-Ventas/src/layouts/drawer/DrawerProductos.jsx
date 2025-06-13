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
                        <img
                            src={publicacion.imagen}
                            alt={publicacion.titulo}
                            className='imagen-detalle'
                        />
                    </div>
                    <div className='detalles'>
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
                                <b>Fecha de publicación: </b>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}
                            </li>
                        </ul>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    );
}

