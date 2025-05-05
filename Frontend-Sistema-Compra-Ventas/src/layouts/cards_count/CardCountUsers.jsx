import Card from 'rsuite/Card';
import Text from 'rsuite/Text';
import './styleCardCount.css'

export const CardCountUsers = () => {
    return (
        <>
            <Card className="card-count" bordered>
                <Card.Header as="h5">Bienvenido Jose Mateo</Card.Header>
                <Card.Body>
                    El sistema tiene actualmente 500 usuarios.
                </Card.Body>
                <Card.Footer>
                    <Text muted>Fecha: {new Date().toLocaleDateString()}</Text>
                </Card.Footer>
            </Card>
        </>
    );
};
