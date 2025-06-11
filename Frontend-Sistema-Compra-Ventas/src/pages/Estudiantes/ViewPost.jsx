import { CardPublication } from "../../layouts/card/CardPublication";
import { obtenerPublicaciones } from "../../context/api/publicaciones";
import { useState, useEffect } from 'react';
import Loader from 'rsuite/Loader';
import Message from "rsuite/Message";
import { toast } from 'react-toastify';
import './stylesStudents.css'

export const ViewPost = () => {

    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);

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
            
            <div className="publicaciones-container">
                {loading ? (
                    <Loader center content="Cargando publicaciones..." />
                ) : publicaciones.length === 0 ? (
                    <p>No hay publicaciones disponibles.</p>
                ) : (
                    publicaciones.map((publicacion) => (
                        <CardPublication key={publicacion.id} {...publicacion} />
                    ))
                )}
            </div>
            
        </>
    );
};
