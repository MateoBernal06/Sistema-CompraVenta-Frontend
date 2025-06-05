import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import './styleCategorias.css';
import { agregarCategoria } from '../../../api/categorias';
import { ToastContainer,toast } from 'react-toastify';
import { useEffect } from 'react';

export const ModalAgregar = ({ show, onHide }) => {

    const [form, setFormData] = useState({
        nombre:'',
        descripcion:'',
    });

    useEffect(() => {
        if (!show) {
            setFormData({
                nombre:'',
                descripcion:'',
            });
        }
    }, [show]);

    const handleChange = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await agregarCategoria(form);
        if (resultado.exito) {
            toast.success(resultado.mensaje || 'Categoría creada correctamente');
        } else {
            toast.error(resultado.mensaje || 'Error al crear la categoría');
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
                            <p className='title-modal-categoria'>Agregar Nueva Categoría</p>
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
                                        appearance="primary">Crear
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
