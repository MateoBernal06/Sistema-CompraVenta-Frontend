import './styleTable.css'
import Table from 'react-bootstrap/Table';

export const TableProducts = () => {
    return (
        <>
            <p className='subtitle-table'>Lista de articulos y servicios</p>
            <Table striped className="table-users">
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '30%' }} /> 
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha de publicacion</th>
                        <th>Precio</th>
                        <th>Accion</th>
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
                                <button className='button-view'>Ver</button>
                                <button className='button-suspended'>Suspender</button>
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
                                <button className='button-view'>Ver</button>
                                <button className='button-suspended'>Suspender</button>
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
        </>
    );
}

