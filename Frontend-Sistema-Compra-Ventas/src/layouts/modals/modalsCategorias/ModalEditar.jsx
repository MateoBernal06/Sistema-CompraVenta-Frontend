import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import './styleCategorias.css';

export const ModalEditar = ({ show, onHide }) => {
    return (
        <Modal size="sm"
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Body className='modal-body-tables'>
                    <div>
                        <p className='title-modal-categoria'>Editar Categoría</p>
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
                                <label htmlFor="id">Categoría ID</label>
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
                                    appearance="primary">Guardar
                                </Button>
                                <Button
                                    appearance="primary" 
                                    color="red"
                                    onClick={onHide}>Cancelar
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
    );
};
