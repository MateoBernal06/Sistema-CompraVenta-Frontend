import Card from 'rsuite/Card';
import VStack from 'rsuite/VStack';
import TagGroup from 'rsuite/TagGroup';
import Tag from 'rsuite/Tag';
import './styleCard.css'
import Button from 'rsuite/Button';
import { FaPencilAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";


export const CardSistem = ({titulo, imagen, createdAt, onEditar, onVerDetalles, onEliminar}) => {
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
                            <FaPencilAlt size={20}/>  Editar
                    </Button>
                    <Button 
                        className='button-card' 
                        color='green' 
                        appearance="primary">
                            <FaCheckCircle size={20}/> Vendido
                    </Button>
                    <Button 
                        className='button-card' 
                        color='red' 
                        appearance="primary"
                        onClick={onEliminar}>
                            <MdDelete size={20}/> Eliminar
                    </Button>
                    <Button 
                        className='button-card' 
                        color='blue' 
                        appearance="primary"
                        onClick={onVerDetalles}>
                            <FaEye size={20}/> Detalles
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