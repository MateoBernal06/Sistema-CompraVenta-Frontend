
import './styleTable.css'
import Table from 'react-bootstrap/Table';
import { DrawerAdmin } from '../drawer/DrawerAdmin';
import { useState } from 'react';

export const TableUsers = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    return (
        <>
            <div className='table-container'>
                <Table className="table-users">
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*categorias.length === 0 ? (
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
                                    <td>{cat.estado ? 'Activo' : 'Inactivo'}</td>
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
                        )*/}
                    </tbody>
                </Table>
            </div>
            <DrawerAdmin open={drawerOpen} onClose={handleCloseDrawer} />
        </>
    );
};