import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import './styleCategorias.css';

export const ModalAgregar = ({ show, onHide }) => {
    return (
        <Modal size="sm"
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Body className='modal-body-tables'>
                    <div>
                        <p className='title-modal-categoria'>Agregar Nueva Categoría</p>
                        <form>
                            <div className='form-group-modal'>
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre" 
                                    name="nombre"
                                    className='form-input-modal'
                                    //value={form.nombre}
                                    //onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className='form-group-modal'>
                                <label htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    className='form-input-modal-area'
                                    //value={form.descripcion}
                                    //onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group-modal'>
                                <label htmlFor="id">User ID</label>
                                <input 
                                    type="text" 
                                    id="id" 
                                    name="id"
                                    className='form-input-modal'
                                    //value={form.id}
                                    //onChange={handleChange}
                                    disabled 
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
                                    onClick={onHide}>Cerrar
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
    );
};
