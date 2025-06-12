import Drawer from 'rsuite/Drawer';
import Button from 'rsuite/Button';
import { FaWhatsapp } from "react-icons/fa";
import './stylesDrawer.css'
export const DrawerDetalles = ({open, onClose, publicacion}) =>{

    if (!publicacion) return null;

    return(
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container'>
                <Drawer.Header>
                    <Drawer.Title>Detalles de la Publicacion</Drawer.Title>
                    <Drawer.Actions>
                        <Button color='red' appearance="primary" onClick={onClose}>Cerrar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    <div>
                        <p className='titulo-detalle'>{publicacion.titulo}</p>
                        <img
                            src={publicacion.imagen}
                            alt={publicacion.titulo}
                            className='imagen-detalle'
                        />
                    </div>
                    <div className='detalles'>
                        <div className='chat'>
                            <Button 
                                color='green' 
                                appearance="primary"
                                className='chat-boton'> 
                                <FaWhatsapp size={20}/> Hablar con el vendedor
                            </Button>
                        </div>
                        <div>
                            <b>Descripción</b> 
                            <p>{publicacion.descripcion}</p>
                        </div>
                        <div>
                            <b>Categoría</b>
                            <p>{publicacion.categoria?.nombre || publicacion.categoria}</p>
                        </div>
                        <div>
                            <b>Precio</b>
                            <p>${publicacion.precio}</p>
                        </div>
                        <div>
                            <b>Fecha de publicación</b>
                            <p>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}</p>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    )
}