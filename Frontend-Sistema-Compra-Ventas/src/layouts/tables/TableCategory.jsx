import './styleTable.css';
import Table from 'react-bootstrap/Table';
import { PiNotePencilFill } from "react-icons/pi";
import { useState } from 'react';
import { ModalEditar } from '../modals/modalsCategorias/ModalEditar';
import { inactivarCategorias } from '../../context/api/categorias';
import { toast } from 'react-toastify';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import Toggle from 'rsuite/Toggle';


export const TableCategory = ({ categorias }) => {
    const [categoriasState, setCategoriasState] = useState(categorias);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const abrirModalEditar = (categoria) => {
        setModalData(categoria);
        setShowModal(true);
    };

    const cerrarModalEditar = () => {
        setShowModal(false);
        setModalData(null);
    };

    const manejarInactivar = async (id) => {
        try {
            await inactivarCategorias(id);
            const updated = categoriasState.map(cat =>
                cat._id === id ? { ...cat, estado: !cat.estado } : cat
            );
            setCategoriasState(updated);
            toast.success("Estado actualizado correctamente");
        } catch (error) {
            toast.error("Error al actualizar el estado");
        }
    };

    const handleUpdateCategoria = (categoriaActualizada) => {
        setCategoriasState(prev =>
            prev.map(cat =>
                cat._id === categoriaActualizada._id ? categoriaActualizada : cat
            )
        );
        cerrarModalEditar();
        toast.success("Categoría actualizada");
    };

    return (
        <>
            <div className='table-container'>
                <Table className="table-users" bordered>
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                    </colgroup>
                    <thead className="table-header">
                        <tr>
                            <th>N</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Fecha de creación</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', color: '#888' }}>
                                    No existen categorías registradas.
                                </td>
                            </tr>
                        ) : (
                            categoriasState.map((cat, idx) => (
                                <tr key={cat._id}>
                                    <td>{idx + 1}</td>
                                    <td>{cat.nombre}</td>
                                    <td className='description'>{cat.descripcion}</td>
                                    <td>{new Date(cat.createdAt).toLocaleDateString()}</td>
                                    <td className='estado-column'>
                                        <span className={cat.estado ? 'estado-activo' : 'estado-inactivo'}>
                                            {cat.estado ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className='accions-table'>
                                            <PiNotePencilFill
                                                title="Editar categoría"
                                                className='button-accion-edit'
                                                size={28}
                                                onClick={() => abrirModalEditar(cat)}
                                            />
                                            <Toggle
                                                size="lg"
                                                checked={cat.estado}
                                                color='green'
                                                checkedChildren={<CheckIcon />}
                                                unCheckedChildren={<CloseIcon />}
                                                onChange={() => manejarInactivar(cat._id)}
                                                title={cat.estado ? 'Inactivar' : 'Activar'}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>

            {modalData && (
                <ModalEditar
                    show={showModal}
                    onHide={cerrarModalEditar}
                    categoria={modalData}
                    onSave={handleUpdateCategoria}
                />
            )}

        </>
    );
};
