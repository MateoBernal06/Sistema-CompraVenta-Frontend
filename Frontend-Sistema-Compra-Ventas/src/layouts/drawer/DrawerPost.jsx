import Drawer from 'rsuite/Drawer';
import './stylesDrawer.css'

export const DrawerPost = ({ open, onClose, publicacion }) => {
        if (!publicacion) return null;

    return(
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container'>
                <Drawer.Header>
                    <Drawer.Title>Detalles de la Publicacion</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    <div>
                        <h2 className='titulo-detalle'>{publicacion.titulo}</h2>
                        <img
                            src={publicacion.imagen}
                            alt={publicacion.titulo}
                            className='imagen-detalle'
                        />
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
                                    <b>Estado: </b>{publicacion.estado ? 'Activo' : 'Inactivo'}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Disponible: </b>{publicacion.disponible ? 'Sí' : 'No'}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Fecha de publicación: </b>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='datos-vendedor'>Datos del vendedor</p>
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
                                    <b>Direccion: </b>{publicacion.autor?.direccion}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Estado: </b>{publicacion.autor?.estado ? 'Activo' : 'Inactivo'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    );
}