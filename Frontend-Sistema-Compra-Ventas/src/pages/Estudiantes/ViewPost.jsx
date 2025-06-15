import { CardPublication } from "../../layouts/card/CardPublication";
import { obtenerPublicaciones } from "../../context/api/publicaciones";
import { useState, useEffect } from 'react';
import Loader from 'rsuite/Loader';
import { FaSearch } from "react-icons/fa";
import Button from 'rsuite/Button';
import { buscarPublicacion } from "../../context/api/publicaciones";
import Message from "rsuite/Message";
import { DrawerDetalles } from "../../layouts/drawer/DrawerDetalles";;
import './stylesStudents.css'
import { toast } from 'react-toastify';

export const ViewPost = () => {

    const [busqueda, setBusqueda] = useState('');
    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

    const cargarPublicaciones = async () => {
        setLoading(true);
        try {
            const data = await obtenerPublicaciones();
            setPublicaciones(data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        } finally {
            setLoading(false);
        }
    };

    const publicacionesOrdenadas = [...publicaciones].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

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

    return (
        <>
            <div className="message-container">
                <Message type="success" centered showIcon header="Comparte lo que sabes, Vende lo que ya no usas" className="message-info" closable>
                    <p>
                        <b>¿Tienes artículos que ya no usas?</b> ¡Dales una segunda vida vendiéndolos a alguien que los necesite! 
                        <b> ¿Dominas algún tema o tienes habilidades que pueden ayudar a otros?</b> Ofrécelos como un servicio, sin miedo.
                        Aquí todos tenemos algo que aportar: productos, conocimientos o tiempo. ¡Conecta, comparte y colabora!
                    </p>
                </Message>
            </div>

            <div className="search-container">
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
            
            <div className="publicaciones-container">
                {loading ? (
                    <Loader center content="Cargando publicaciones..." />
                ) : publicaciones.length === 0 ? (
                    <p className="mensaje-disponibles-view">No hay publicaciones disponibles.</p>
                ) : (
                    publicacionesOrdenadas.map((publicacion) => (
                        <CardPublication 
                            key={publicacion._id || publicacion.id} 
                            {...publicacion}
                            onVerDetalles={() => {
                                setPublicacionSeleccionada(publicacion);
                                setOpenDrawer(true);
                            }} 
                        />
                    ))
                )}
            </div>
            <DrawerDetalles
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                publicacion={publicacionSeleccionada}
            />
        </>
    );
};
