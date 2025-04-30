import { Card, VStack, TagGroup, Tag } from 'rsuite';
import './styleCard.css'

export const CardSistem = () => {
    return(
        <Card className='card-sistem'>
            <img
                src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974"
                alt="Shadow"
                width={200}
                style={{ objectFit: 'cover' }}
            />
            <VStack spacing={2}>
                <Card.Header as="h5">Datos del administrador</Card.Header>
                <Card.Body>
                    <ul className='data-user'>
                        <li>
                            <b>Nombre:</b> Jose Mateo Bernal
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
                        <Tag size="sm">🐲 ESFOT</Tag>
                        <Tag size="sm">🧑🏾‍🔧 Desarrollo de software</Tag>
                    </TagGroup>
                </Card.Footer>
            </VStack>
        </Card>
    )
}