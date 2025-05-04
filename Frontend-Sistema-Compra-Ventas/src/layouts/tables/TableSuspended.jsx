import './styleTable.css'
import Table from 'react-bootstrap/Table';

export const TableSuspended = () => {
    return (
        <Table striped className="table-users">
            <thead>
                <tr>
                    <th>N</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Estado</th>
                    <th>Celular</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark.otto@epn.edu.ec</td>
                    <td>Suspendido</td>
                    <td>0987456123</td>
                    <td>
                        <div className='accions-table'>
                            <button className='button-suspended'>Quitar suspensión</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob.thornton@epn.edu.ec</td>
                    <td>Suspendido</td>
                    <td>0987456123</td>
                    <td>
                        <div className='accions-table'>
                            <button className='button-suspended'>Quitar suspensión</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};