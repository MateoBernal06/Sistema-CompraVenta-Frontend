import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import { editarCategorias } from '../../../api/categorias';
import { ToastContainer,toast } from 'react-toastify';
import './styleCategorias.css';

export const ModalEditar = ({ show, onHide, categoria, onCategoriaCreada }) => {
    
    const [form, setForm] = useState({

        nombre: '',
        descripcion: ''
    });

    useEffect(() => {
        if (show && categoria) {
            setForm({
                id: categoria.id || categoria._id || '',
                nombre: categoria.nombre || '',
                descripcion: categoria.descripcion || ''
            });
        }
    }, [show, categoria]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await editarCategorias(form);
        if (resultado.exito) {
            toast.success(resultado.mensaje || 'Categoría editada correctamente');
        } else {
            toast.error(resultado.mensaje || 'Error al editar la categoría');
        }
    };
    
    return (
        <>
            <Modal size="sm"
                    show={show}
                    onHide={onHide}
                    centered
                >
                    <Modal.Body className='modal-body-tables'>
                        <div>
                            <p className='title-modal-categoria'>Editar Categoría</p>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group-modal'>
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre" 
                                        name="nombre"
                                        className='form-input-modal'
                                        value={form.nombre}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className='form-group-modal'>
                                    <label htmlFor="descripcion">Descripcion</label>
                                    <textarea
                                        id="descripcion"
                                        name="descripcion"
                                        className='form-input-modal-area'
                                        value={form.descripcion}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group-modal-button'>
                                    <Button
                                        type='submit' 
                                        color="blue" 
                                        appearance="primary">Guardar
                                    </Button>
                                    <Button
                                        appearance="primary" 
                                        color="red"
                                        onClick={onHide}>Salir
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
                <ToastContainer position="top-right" autoClose={3000} />
        </>

    );
};
