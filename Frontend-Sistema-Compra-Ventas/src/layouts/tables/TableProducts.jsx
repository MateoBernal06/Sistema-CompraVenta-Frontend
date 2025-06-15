import './styleTable.css'
import Table from 'react-bootstrap/Table';
import Toggle from 'rsuite/Toggle';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { BsFileEarmarkPost } from "react-icons/bs";

export const TableProducts = ({ publicaciones, onInactivar }) => {
    return (
        <>
        
            <div className='table-container'>
                <Table className="table-users" bordered>
                    <colgroup>
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead className="table-header">
                        <tr>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Autor</th>
                            <th>Fecha de publicacion</th>
                            <th>Disponible</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicaciones.length === 0 ? (
                            <tr>
                                <td colSpan={7} style={{ textAlign: 'center', color: '#888' }}>
                                    No existen publicaciones registradas.
                                </td>
                            </tr>
                        ) : (
                            publicaciones.map((pub, idx) => (
                                <tr key={pub._id}>
                                    <td>{pub.titulo}</td>
                                    <td className='description'>{pub.descripcion}</td>
                                    <td>{pub.autor.nombre} {pub.autor.apellido}</td>
                                    <td>{new Date(pub.createdAt).toLocaleDateString()}</td>
                                    <td className='estado-column'>
                                        <span className={pub.disponible ? 'estado-disponible' : 'estado-no-disponible'}>
                                            {pub.disponible ? 'Sí' : 'No'}
                                        </span>
                                    </td>
                                    <td className='estado-column'>
                                        <span className={pub.estado ? 'estado-activo' : 'estado-inactivo'}>
                                            {pub.estado ? 'Activo' : 'Inactivo'}
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
                                                checked={pub.estado}
                                                color='green'
                                                checkedChildren={<CheckIcon />}
                                                unCheckedChildren={<CloseIcon />}
                                                onChange={() => onInactivar(pub._id)}
                                                title={pub.estado ? 'Inactivar' : 'Activar'}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

