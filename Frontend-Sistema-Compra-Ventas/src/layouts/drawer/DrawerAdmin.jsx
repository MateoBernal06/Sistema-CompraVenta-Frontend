import Drawer from 'rsuite/Drawer';
import { CardPost } from '../card/CardPost';


export const DrawerAdmin = ({open, onClose, publicaciones = [], estudiante}) => {

    return (
        <>
            <Drawer open={open} onClose={onClose} className='drawer-container-admin'>
                <Drawer.Header>
                    <Drawer.Title>Publicaciones realizadas por {estudiante?.nombre} {estudiante?.apellido}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='body-drawer'>
                    {publicaciones.length === 0 ? (
                        <p>No hay publicaciones para este usuario.</p>
                    ) : (
                        publicaciones.map(pub => (
                            <CardPost
                                key={pub._id}
                                titulo={pub.titulo}
                                descripcion={pub.descripcion}
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

