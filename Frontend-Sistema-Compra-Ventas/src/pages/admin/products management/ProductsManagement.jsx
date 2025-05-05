import Button from 'rsuite/Button'
import { useState } from 'react';
import '../user management/styleUserManagement.css'
import { TableProducts } from '../../../layouts/tables/TableProducts';
import { TableProductsSuspended } from '../../../layouts/tables/TableProductsSuspended';

export const ProductsManagement = () => {
    
    const [activeTable, setActiveTable]=useState('publicaciones')
    
    return(
        <>
            <h1>Gestión de Servicios</h1>
            <div className='user-management'> 
                <div className='user-view'>
                    <div className='place-buttons'>
                        <Button
                            color={activeTable === 'publicaciones' ? 'green' : 'gray'}
                            appearance="primary"
                            onClick={() => setActiveTable('publicaciones')}
                            className="boton-page-users"
                        >
                            Articulos/Servicios
                        </Button>
                        <Button
                            color={activeTable === 'suspendidos' ? 'green' : 'gray'}
                            appearance="primary"
                            onClick={() => setActiveTable('suspendidos')}
                            className="boton-page-users"
                        >
                            suspendidos
                        </Button>
                    </div>
                </div>
                <div className='user-actions'>
                    <input 
                        type='text' 
                        name="buscar" 
                        id="buscar" 
                        placeholder="Buscar usuarios..." 
                        className='search-users'
                    />
                    <button className='search-button'>Buscar</button>
                </div>
                <div className='place-table-services'>
                    {activeTable === 'publicaciones' ? <TableProducts/> : null}
                    {activeTable === 'suspendidos' ? <TableProductsSuspended/> : null}
                </div>
            </div>
        </>
    );
}