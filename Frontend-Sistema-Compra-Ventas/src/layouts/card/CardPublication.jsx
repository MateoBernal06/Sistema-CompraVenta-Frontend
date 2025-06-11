import { Card, Text, Button, TagGroup, Tag } from 'rsuite';
import './styleCard.css';

export const CardPublication = ({titulo, precio, imagen, createdAt}) => {
    
    

    return (
        <Card width={270} shaded>
            <img
                className='imagen-post'
                src={imagen}
                alt={titulo}
            />
            <Card.Header as="h5">{titulo}</Card.Header>
            <Card.Body className="price-body">
                <Text className="price-text">
                    ${precio}
                </Text>
                <Button appearance="primary" className='btn-card'>
                    Ver detalles
                </Button>
            </Card.Body>
            <Card.Footer className="footer-card">
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
        </Card>
    );
};
