import Drawer from 'rsuite/Drawer';
import { CardPost } from '../card/CardPost';
import Loader from 'rsuite/Loader';


const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};


export const DrawerAdmin = ({open, onClose, publicaciones = [], estudiante, isLoading = false}) => {

    return (
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container-admin'>
                <Drawer.Header>
                    <Drawer.Title>Publicaciones realizadas por {estudiante?.nombre} {estudiante?.apellido}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    {isLoading ? (
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height: '200px',
                            flexDirection: 'column'
                        }}>
                            <Loader size="lg" content="Cargando publicaciones..." vertical />
                        </div>
                    ) : publicaciones.length === 0 ? (
                        <p>No hay publicaciones para este usuario.</p>
                    ) : (
                        publicaciones.map(pub => (
                            <CardPost
                                key={pub._id}
                                titulo={truncateText(pub.titulo, 50)}
                                descripcion={truncateText(pub.descripcion, 150)}
                                imagen={pub.imagen}
                                createdAt={pub.createdAt}
                        />
                    ))
                )}
                </Drawer.Body>
            </Drawer>
        </>
    );
};

