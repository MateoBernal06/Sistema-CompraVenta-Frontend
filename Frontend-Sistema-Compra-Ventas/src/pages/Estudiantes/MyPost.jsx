import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import Button from 'rsuite/Button';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CardSistem } from "../../layouts/card/CardSistem";
import { FaBasketShopping } from "react-icons/fa6";
import { ModalCreate } from "../../layouts/modals/modalProductos/ModalCreate";
import { ModalUpdate } from "../../layouts/modals/modalProductos/ModalUpdate";
import { useState, useEffect, useRef } from 'react';
import { 
        misPublicaciones, 
        eliminarPublicacion, 
        buscarPublicacion, 
        publicacionVendida
    } 
from "../../context/api/publicaciones";
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
    const [showConfirmVendido, setShowConfirmVendido] = useState(false);
    const [publicacionAVender, setPublicacionAVender] = useState(null);
    
    const publicacionesRefs = useRef({});
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


    const handleBuscar = async () => {
        setLoading(true);
        try {
            if (busqueda.trim() === '') {
                toast.info("Nombre de publicación inválido");
                return;
            }

            const resultado = await buscarPublicacion(busqueda.trim());

            if (Array.isArray(resultado)) {
                setPublicaciones(resultado);
            } else if (resultado) {
                setPublicaciones([resultado]);
            } else {
                setPublicaciones([]);
            }
        } catch (error) {
            console.error('Error al buscar publicación:', error);
            setPublicaciones([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        cargarPublicaciones();
    }, []);


    const handleSave = (updatedPublicacion) => {
        setShowModalUpdate(false);
        setPublicaciones(prev =>
            prev.map(pub =>
                (pub._id || pub.id) === (updatedPublicacion._id || updatedPublicacion.id)
                    ? { ...pub, ...updatedPublicacion }
                    : pub
            )
        );
        setTimeout(() => {
            const id = updatedPublicacion._id || updatedPublicacion.id;
            publicacionesRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

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
                </div>
                <div>
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Ingresa el nombre de un producto" 
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
            <div className='card-sistem-container'>
                {loading ? (
                    <Loader center content="Cargando publicaciones..." />
                ) : publicaciones.length === 0 ? (
                    <p className="mensaje-disponibles">
                        No hay publicaciones disponibles.
                    </p>
                ) : (
                    publicaciones.map((publicacion) => (
                        <div
                            key={publicacion._id || publicacion.id}
                            ref={el => {
                                const id = publicacion._id || publicacion.id;
                                if (el) publicacionesRefs.current[id] = el;
                            }}
                        >
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
                            onVendida={() => {
                                setPublicacionAVender(publicacion);
                                setShowConfirmVendido(true);
                            }}
                            />
                        </div>
                    ))
                )}
            </div>
            <ModalCreate 
                show={showModal} 
                onHide={() => setShowModal(false)}
                onSave={(nuevaPublicacion) => {
                setShowModal(false);
                setPublicaciones(prev => [nuevaPublicacion, ...prev]);
            }} />
            <ModalUpdate
                show={showModalUpdate}
                onHide={() => setShowModalUpdate(false)}
                publicacion={publicacionSeleccionada}
                onSave={handleSave}
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
            {showConfirmVendido && (
                <div className="confirm-overlay">
                    <Message 
                        showIcon type="info" 
                        header="¿Marcar como vendido?"
                    >
                        <ButtonToolbar className="botones-eleccion">
                            <Button
                                className="boton-confirmacion"
                                size="sm"
                                color="green"
                                appearance="primary"
                                onClick={async () => {
                                    const res = await publicacionVendida(publicacionAVender._id || publicacionAVender.id);
                                    if (res.exito) {
                                        setPublicaciones(prev =>
                                            prev.map(pub =>
                                                (pub._id || pub.id) === (publicacionAVender._id || publicacionAVender.id)
                                                    ? { ...pub, disponible: false }
                                                    : pub
                                            )
                                        );
                                        toast.success("Producto marcado como vendido");
                                    } else {
                                        toast.error(res.mensaje || "Error al actualizar estado");
                                    }
                                    setShowConfirmVendido(false);
                                    setPublicacionAVender(null);
                                }}
                            >
                                Sí
                            </Button>
                            <Button
                                size="sm"
                                className="boton-confirmacion"
                                appearance="subtle"
                                onClick={() => {
                                    setShowConfirmVendido(false);
                                    setPublicacionAVender(null);
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
