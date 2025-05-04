
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
            <Table striped className="table-users">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark.otto@epn.edu.ec</td>
                        <td>0987456123</td>
                        <td>
                            <div className='accions-table'>
                                <button className='button-suspended'>Suspender</button>
                                <button onClick={handleOpenDrawer} className='button-view-post'>Ver publicaciones</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>jacob.thornton@epn.edu.ec</td>
                        <td>0987456123</td>
                        <td>
                            <div className='accions-table'>
                                <button className='button-suspended'>Suspender</button>
                                <button onClick={handleOpenDrawer} className='button-view-post'>Ver publicaciones</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <DrawerAdmin open={drawerOpen} onClose={handleCloseDrawer} />
        </>
    );
};