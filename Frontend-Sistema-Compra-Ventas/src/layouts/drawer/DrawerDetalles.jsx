import Drawer from 'rsuite/Drawer';
import Button from 'rsuite/Button';
import { FaWhatsapp } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import './stylesDrawer.css'
export const DrawerDetalles = ({open, onClose, publicacion}) =>{

    if (!publicacion) return null;

    const mensaje = encodeURIComponent(`Hola, acabo de ver tu publicación y me interesa mucho. ¿Aún está disponible?`);
    const mandarMensaje = `${import.meta.env.VITE_WHATSAPP_LINK}${publicacion.autor?.celular}?text=${mensaje}`;


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
                        <div className='chat'>
                            <Button 
                                color='green' 
                                appearance="primary"
                                href={mandarMensaje}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='chat-boton'> 
                                <FaWhatsapp size={20}/> Contactar Vendedor
                            </Button>
                        </div>
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
                                    <b>Categoría</b> <p className='option-categoria'>{publicacion.categoria?.nombre || publicacion.categoria}</p>
                                </li>
                                <li className='vendedor-options'>
                                    <b>Precio: </b>${publicacion.precio}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Fecha de publicación</b>
                                    <p className='option-categoria'>{publicacion.createdAt ? new Date(publicacion.createdAt).toLocaleString() : ''}</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='datos-vendedor'>
                                <FaUserShield size={20}/> <b>Datos del vendedor</b>
                            </p>
                            <ul className='vendedor'>
                                <li className='vendedor-options'>
                                    <b>Nombre: </b>{publicacion.autor?.nombre}
                                </li>
                                <li className='vendedor-options'>
                                    <b>Apellido: </b>{publicacion.autor?.apellido} 
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </>
    )
}