import './styleTable.css';
import Table from 'react-bootstrap/Table';
import { PiNotePencilFill } from "react-icons/pi";
import { useState } from 'react';
import { ModalEditar } from '../modals/modalsCategorias/ModalEditar';
import { inactivarCategorias } from '../../api/categorias';
import { toast, ToastContainer } from 'react-toastify';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import Toggle from 'rsuite/Toggle'

export const TableCategory = ({ categorias, recargarCategorias }) => {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const formatoFecha = (fecha) => {
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(fecha).toLocaleDateString('es-ES', opciones);
    };

    const manejarInactivar = async (id) => {
        const resultado = await inactivarCategorias(id);
        if (resultado.exito) {
            await recargarCategorias();
        } else {
            console.log(resultado.msg);
        }
    };

    return (
        <>
            <div className='table-container'>
                <Table className="table-users">
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((cat, idx) => (
                            <tr key={cat._id}>
                                <td>{idx + 1}</td>
                                <td>{cat.nombre}</td>
                                <td className='description'>{cat.descripcion}</td>
                                <td>{formatoFecha(cat.createdAt)}</td>
                                <td>{cat.estado ? 'Activo' : 'Inactivo'}</td>
                                <td>
                                    <div className='accions-table'>
                                        <PiNotePencilFill 
                                            title="Editar categoría"
                                            className='button-accion-edit'
                                            size={28}
                                            onClick={() => {
                                                setCategoriaSeleccionada({
                                                    id: cat._id,
                                                    nombre: cat.nombre,
                                                    descripcion: cat.descripcion
                                                });
                                                setShowModalEditar(true);
                                            }} 
                                        />
                                        <Toggle
                                            size="lg"
                                            color="green"
                                            checked={cat.estado}
                                            checkedChildren={<CheckIcon />}
                                            unCheckedChildren={<CloseIcon />}
                                            onChange={() => manejarInactivar(cat._id)}
                                            title={cat.estado ? 'Inactivar' : 'Activar'}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <ModalEditar
                show={showModalEditar}
                onHide={() => {
                    setShowModalEditar(false);
                    recargarCategorias();
                }}
                categoria={categoriaSeleccionada}
            />

            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};
