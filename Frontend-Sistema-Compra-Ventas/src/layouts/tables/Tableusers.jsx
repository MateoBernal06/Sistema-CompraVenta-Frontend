
import './styleTable.css'
import Table from 'react-bootstrap/Table';
import { DrawerAdmin } from '../drawer/DrawerAdmin';
import { useState } from 'react';
import { inactivarEstudiante} from '../../context/api/estudiantes';
import { publicacionesDelUsuario } from '../../context/api/publicaciones';
import Toggle from 'rsuite/Toggle';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { toast } from 'react-toastify';
import { BsFileEarmarkPost } from "react-icons/bs";

export const TableUsers = ({ estudiantes }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleCloseDrawer = () => setDrawerOpen(false);
    const [estudiantesState, setEstudiantesState] = useState(estudiantes);
    const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);
    const [publicacionesUsuario, setPublicacionesUsuario] = useState([]);

    const manejarInactivar = async (id) => {
        try {
            await inactivarEstudiante(id);
            const updated = estudiantesState.map(estu =>
                estu._id === id ? { ...estu, estado: !estu.estado } : estu
            );
            setEstudiantesState(updated);
            toast.success("Estado actualizado correctamente");
        } catch (error) {
            toast.error("Error al actualizar el estado");
        }
    };

    const handleOpenDrawer = async (estu) => {
        setEstudianteSeleccionado(estu);
        setDrawerOpen(true);
        const publicaciones = await publicacionesDelUsuario(estu._id);
        setPublicacionesUsuario(publicaciones);
    };


    return (
        <>
            <div className='table-container'>
                <Table className="table-users" bordered  >
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '15%' }} />
                    </colgroup>
                    <thead className="table-header">
                        <tr>
                            <th>N</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo Electrónico</th>
                            <th>Celular</th>
                            <th>Fecha de registro</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.length === 0 ? (
                            <tr>
                                <td colSpan={8} style={{ textAlign: 'center', color: '#888' }}>
                                    No existen estudiantes registrados en el sistema.
                                </td>
                            </tr>
                        ) : (
                            estudiantesState.map((estu, idx) => (
                                <tr key={estu._id}>
                                    <td>{idx + 1}</td>
                                    <td>{estu.nombre}</td>
                                    <td>{estu.apellido}</td>
                                    <td>{estu.email}</td>
                                    <td>{estu.celular}</td>
                                    <td>{new Date(estu.createdAt).toLocaleDateString()}</td>
                                    <td className='estado-column'>
                                        <span className={estu.estado ? 'estado-activo' : 'estado-inactivo'}>
                                            {estu.estado ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className='accions-table'>
                                            <BsFileEarmarkPost
                                                title="Ver publicaciones"
                                                className='button-accion-edit'
                                                size={28}
                                                onClick={() => handleOpenDrawer(estu)}
                                            />
                                            <Toggle
                                                size="lg"
                                                checked={estu.estado}
                                                color='green'
                                                checkedChildren={<CheckIcon />}
                                                unCheckedChildren={<CloseIcon />}
                                                onChange={() => manejarInactivar(estu._id)}
                                                title={estu.estado ? 'Inactivar' : 'Activar'}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
            <DrawerAdmin 
                open={drawerOpen} 
                onClose={handleCloseDrawer} 
                estudiante={estudianteSeleccionado}
                publicaciones={publicacionesUsuario}
            />
        </>
    );
};