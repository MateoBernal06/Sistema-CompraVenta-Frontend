import Card from 'rsuite/Card';
import VStack from 'rsuite/VStack';
import TagGroup from 'rsuite/TagGroup';
import Tag from 'rsuite/Tag';
import './styleCard.css'
import Button from 'rsuite/Button';

export const CardSistem = ({titulo, imagen, createdAt, onEditar, onVerDetalles}) => {
    return(
        <Card width={450} shaded direction="row">
            <img
                className='imagen-post-card'
                src={imagen}
                alt={titulo}
            />
            <VStack spacing={2} className='body-card'>
                <Card.Header as="h5">{titulo}</Card.Header>
                <Card.Body className='buttons-card'>
                    <Button 
                        className='button-card' 
                        color='yellow' 
                        appearance="primary"
                        onClick={onEditar}>
                            Editar
                    </Button>
                    <Button 
                        className='button-card' 
                        color='green' 
                        appearance="primary">
                            Vendido
                    </Button>
                    <Button 
                        className='button-card' 
                        color='red' 
                        appearance="primary">
                            Eliminar
                    </Button>
                    <Button 
                        className='button-card' 
                        color='blue' 
                        appearance="primary"
                        onClick={onVerDetalles}>
                            Ver detalles
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <TagGroup>
                        <Tag className="tag" size="sm">Publicado: <b>
                            {createdAt
                                ? new Date(createdAt).toLocaleDateString() +
                                    " " +
                                    new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : ""}
                            </b>
                        </Tag>
                    </TagGroup>
                </Card.Footer>
            </VStack>
        </Card>
    )
}