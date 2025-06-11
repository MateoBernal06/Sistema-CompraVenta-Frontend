import Card from 'rsuite/Card';
import VStack from 'rsuite/VStack';
import TagGroup from 'rsuite/TagGroup';
import Tag from 'rsuite/Tag';
import './styleCard.css'

export const CardSistem = ({titulo, imagen, createdAt}) => {
    return(
        <Card width={400} shaded direction="row">
            <img
                className='imagen-post'
                src={imagen}
                alt={titulo}
            />
            <VStack spacing={2}>
                <Card.Header as="h5">{titulo}</Card.Header>
                <Card.Body>
                    <ul className='data-user'>
                        <li>
                            <b>Nombre:</b> Jose Mateo
                        </li>
                        <li>
                            <b>Apellido:</b> Bernal
                        </li>
                        <li>
                            <b>Celular:</b> 0995389340
                        </li>
                        <li>
                            <b>Email:</b> jose.mateo@example.com
                        </li>
                    </ul>
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