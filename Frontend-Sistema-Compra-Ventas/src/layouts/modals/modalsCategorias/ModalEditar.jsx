import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { editarCategorias } from '../../../context/api/categorias';
import { toast } from 'react-toastify';
import './styleCategorias.css';

export const ModalEditar = ({ show, onHide, categoria, onSave }) => {
    
    const [form, setForm] = useState({ id: '', nombre: '', descripcion: '' });
    const [original, setOriginal] = useState({ id: '', nombre: '', descripcion: '' });

    useEffect(() => {
        if (show && categoria) {
            const data = {
                id: categoria.id || categoria._id || '',
                nombre: categoria.nombre || '',
                descripcion: categoria.descripcion || ''
            };
            setForm(data);
            setOriginal(data);
        } else if (!show) {
            setForm({ id: '', nombre: '', descripcion: '' });
            setOriginal({ id: '', nombre: '', descripcion: '' });
        }
    }, [show, categoria]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.nombre === original.nombre && form.descripcion === original.descripcion) {
            toast.info('No se realizaron cambios en la categoría.');
            return;
        }

        const resultado = await editarCategorias(form);

        if (resultado.exito) {
            toast.success(resultado.mensaje || 'Categoría editada correctamente');

            onSave({
                _id: form.id,
                nombre: form.nombre,
                descripcion: form.descripcion,
                createdAt: categoria.createdAt,
                estado: categoria.estado
            });

            onHide();
        } else {
            toast.error(resultado.mensaje || 'Error al editar la categoría');
        }
    };

    return (
        <Modal size="sm" show={show} onHide={onHide} centered>
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
                            <label htmlFor="descripcion">Descripción</label>
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
                            <Button type='submit' variant="primary">Guardar</Button>
                            <Button onClick={onHide} variant="danger">Salir</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};
