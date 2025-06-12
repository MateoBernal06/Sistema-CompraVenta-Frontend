import Drawer from 'rsuite/Drawer';
import Button from 'rsuite/Button';


export const DrawerProductos = ({open, onClose}) => {
    return (
        <>
            <Drawer open={open} onClose={onClose}>
                <Drawer.Header>
                    <Drawer.Title>DragonYa</Drawer.Title>
                    <Drawer.Actions>
                        <Button color='red' appearance="primary" onClick={onClose}>Cerrar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    Contenido
                </Drawer.Body>
            </Drawer>
        </>
    );
}

