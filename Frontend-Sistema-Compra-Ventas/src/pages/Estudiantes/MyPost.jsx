import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import Button from 'rsuite/Button';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CardSistem } from "../../layouts/card/CardSistem";
import { FaBasketShopping } from "react-icons/fa6";
import { ModalCreate } from "../../layouts/modals/modalProductos/ModalCreate";
import { ModalUpdate } from "../../layouts/modals/modalProductos/ModalUpdate";
import { useState, useEffect } from 'react';
import { misPublicaciones, eliminarPublicacion } from "../../context/api/publicaciones";
import Loader from 'rsuite/Loader';
import { DrawerProductos } from "../../layouts/drawer/DrawerProductos";
import { Message, ButtonToolbar } from 'rsuite';
import { toast } from 'react-toastify';

export const MyPost = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [publicacionAEliminar, setPublicacionAEliminar] = useState(null);
    
    const cargarPublicaciones = async () => {
        setLoading(true);
        try {
            const data = await misPublicaciones();
            setPublicaciones(data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarPublicaciones();
    }, []);

    return (
        <>
            <div>
                <h2 className="category-title">
                    <BsFillFileEarmarkPostFill size={24}/> Mis Publicaciones
                </h2>
                <p className="category-description">
                    Administra tus publicaciones fácilmente: crea, edita, marca como vendido 
                    y visualiza productos de forma rápida y sencilla.
                </p>
            </div>
            <div className='user-actions'>
                <div className='user-actions-buttons'>
                    <Button 
                        appearance="primary" 
                        className='button-create-category'
                        onClick={() => setShowModal(true)}
                    >
                        <IoMdAddCircleOutline size={24} color="#fff" className='icon'/>
                        Crear Publicación
                    </Button>
                    <Button
                        color="green" 
                        appearance="primary" 
                        className='button-view-post'
                        //onClick={() => setShowModal(true)}
                    >
                        <FaBasketShopping size={24} color="#fff" className='icon'/>
                        Productos vendidos
                    </Button>
                </div>
                <div>
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Ingresa el nombre de un producto" 
                        className='search-users'
                        //value={busqueda}
                        //onChange={e => setBusqueda(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleBuscar(); }}
                    />
                    <Button 
                        appearance="primary" 
                        className='search-button'
                        //onClick={handleBuscar}
                    ><FaSearch size={16}/></Button>
                </div>
            </div>
            <div className='card-sistem-container'>
                {loading ? (
                    <Loader center content="Cargando publicaciones..." />
                ) : publicaciones.length === 0 ? (
                    <p className="mensaje-disponibles">No hay publicaciones disponibles.</p>
                ) : (
                    publicaciones.map((publicacion) => (
                        <CardSistem 
                            key={publicacion._id || publicacion.id}
                            {...publicacion}
                            onEditar={() => {
                                setPublicacionSeleccionada(publicacion);
                                setShowModalUpdate(true);
                            }}
                            onVerDetalles={() => {
                                setPublicacionSeleccionada(publicacion);
                                setOpenDrawer(true);
                            }}
                            onEliminar={() => {
                                setPublicacionAEliminar(publicacion);
                                setShowConfirm(true);
                            }}
                        />
                    ))
                )}
            </div>
            <ModalCreate 
                show={showModal} 
                onHide={() => setShowModal(false)} 
            />
            <ModalUpdate
                show={showModalUpdate}
                onHide={() => setShowModalUpdate(false)}
                publicacion={publicacionSeleccionada}
                onSave={cargarPublicaciones}
            />
            <DrawerProductos
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                publicacion={publicacionSeleccionada}
            />
            {showConfirm && (
                <div className="confirm-overlay">
                    <Message 
                        showIcon type="info" 
                        header="¿Estás seguro de que deseas eliminar esta publicación?"
                    >
                        <ButtonToolbar className="botones-eleccion">
                            <Button
                                className="boton-confirmacion"
                                size="sm"
                                color="red"
                                appearance="primary"
                                onClick={async () => {
                                    const res = await eliminarPublicacion(publicacionAEliminar._id || publicacionAEliminar.id);
                                    if (res.exito) {
                                        toast.success("Publicación eliminada");
                                        cargarPublicaciones();
                                    } else {
                                        toast.error(res.mensaje || "Error al eliminar");
                                    }
                                    setShowConfirm(false);
                                    setPublicacionAEliminar(null);
                                }}
                            >
                                Si
                            </Button>
                            <Button
                                className="boton-confirmacion"
                                size="sm"
                                appearance="subtle"
                                onClick={() => {
                                    setShowConfirm(false);
                                    setPublicacionAEliminar(null);
                                }}
                            >
                                No
                            </Button>
                        </ButtonToolbar>
                    </Message>
                </div>
            )}
        </>
    );
};
