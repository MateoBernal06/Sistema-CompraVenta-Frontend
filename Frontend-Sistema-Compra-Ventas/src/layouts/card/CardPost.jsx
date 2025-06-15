import Card from 'rsuite/Card';
import VStack from 'rsuite/VStack';
import TagGroup from 'rsuite/TagGroup';
import Tag from 'rsuite/Tag';
import './styleCard.css'

export const CardPost = ({ titulo, descripcion, imagen, createdAt }) => {
    return (
        <Card width={450} shaded direction="row">
            <div className='lugar-imagen-producto'>
                <img
                    className='imagen-post-card'
                    src={imagen}
                    alt={titulo}
                />
            </div>
            <VStack spacing={2} className='body-card'>
                <Card.Header as="h5">{titulo}</Card.Header>
                <Card.Body className='buttons-card'>
                    <p className='description'>{descripcion}</p>
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
    );
}
