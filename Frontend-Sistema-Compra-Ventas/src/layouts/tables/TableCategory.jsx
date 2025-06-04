import './styleTable.css'
import Table from 'react-bootstrap/Table';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PiNotePencilFill } from "react-icons/pi";
import Button from 'rsuite/Button';
import { AiOutlineStop } from "react-icons/ai";
import { ModalAgregar } from '../modals/modalsCategorias/ModalAgregar';
import { useState } from 'react';

export const TableCategory = () => {
    
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='user-actions'>
                <div>
                    <Button 
                        appearance="primary" 
                        className='button-create-category'
                        onClick={() => setShowModal(true)}
                    >
                        <IoMdAddCircleOutline size={24} color="#fff" className='icon'/>
                        Crear nueva categoría
                    </Button>
                </div>
                <div>
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Ingresa el nombre de la categoría" 
                        className='search-users'
                    />
                    <Button appearance="primary" className='search-button'><FaSearch size={16}/></Button>
                </div>
            </div>
            <div className='table-container'>
                <Table className="table-users">
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '30%' }} /> 
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead className="table-header">
                        <tr>
                            <th>N</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Fecha de creacion</th>
                            <th>Creador</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Libro Basico 1</td>
                            <td className='desciption-place'>
                                <p className='description'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque 
                                    ex molestias illo animi vel quasi aliquid, quia veritatis non inventore 
                                    aliquam iure distinctio sequi fugit alias fugiat at libero hic!
                                </p>
                            </td>
                            <td>2023-01-01</td>
                            <td>15</td>
                            <td>
                                <div className='accions-table'>
                                    <button className='button-accion-edit' title="Editar categoría">
                                        <PiNotePencilFill size={24} />
                                    </button>
                                    <button className='button-accion-inactive' title="Inactivar categoría">
                                        <AiOutlineStop size={24} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Clases de fisica</td>
                            <td>
                                <p className='description'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque 
                                    ex molestias illo animi vel quasi aliquid, quia veritatis non inventore 
                                    aliquam iure distinctio sequi fugit alias fugiat at libero hic!
                                </p>
                            </td>
                            <td>2023-01-02</td>
                            <td>10</td>
                            <td>
                                <div className='accions-table'>
                                    <button className='button-view' title="Editar categoría">Ver</button>
                                    <button className='button-suspended' title="Inactivar categoría">Inactivar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Algebra de calvache</td>
                            <td>
                                <p className='description'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque 
                                    ex molestias illo animi vel quasi aliquid, quia veritatis non inventore 
                                    aliquam iure distinctio sequi fugit alias fugiat at libero hic!
                                </p>
                            </td>
                            <td>2025-12-04</td>
                            <td>8</td>
                            <td>
                                <div className='accions-table'>
                                    <button className='button-view'>Ver</button>
                                    <button className='button-suspended'>Suspender</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <ModalAgregar
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </>
    );
}

