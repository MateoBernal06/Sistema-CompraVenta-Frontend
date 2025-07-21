import Drawer from 'rsuite/Drawer';
import Badge from 'rsuite/Badge';
import './stylesDrawer.css'

export const DrawerPost = ({ open, onClose, publicacion }) => {
        if (!publicacion) return null;

    return(
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container'>
                <Drawer.Header>
                    <Drawer.Title>Detalles de la Publicación</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    <div>
                        <h2 className='titulo-detalle'>{publicacion.titulo}</h2>
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
                            <p className='datos-detalles'><b>Detalles</b></p>
                            <ul className='vendedor'>
                                <li className='vendedor-options'>
                                    <b>Descripción</b>
                                    <p>{publicacion.descripcion}</p>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Categoría</b>
                                    <p className='option-categoria'>{publicacion.categoria?.nombre || publicacion.categoria}</p>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Precio: </b>${publicacion.precio}
                                </li>
                                <li className='vendedor-options'>
                                    <Badge 
                                        color={publicacion.estado ? 'green' : 'red'} 
                                    >
                                        {publicacion.estado ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Disponible: </b>{publicacion.disponible ? 'Sí' : 'No'}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Fecha de publicación</b>
                                    <p className='option-categoria'>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='datos-vendedor'> <b>Datos del vendedor</b></p>
                            <ul className='vendedor'>
                                <li className='vendedor-options'>
                                    <b>Nombre: </b>{publicacion.autor?.nombre}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Apellido: </b>{publicacion.autor?.apellido} 
                                </li>
                                <li className='vendedor-options'>
                                    <b>Correo: </b>{publicacion.autor?.email}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Dirección: </b>{publicacion.autor?.direccion}
                                </li>
                                <li className='vendedor-options'>
                                    <Badge 
                                        color={publicacion.autor?.estado ? 'green' : 'red'} 
                                    >
                                        {publicacion.autor?.estado ? 'Activo' : 'Inactivo'}
                                    </Badge>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    );
}