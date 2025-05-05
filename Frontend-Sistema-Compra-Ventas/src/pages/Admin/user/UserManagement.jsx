import './styleUserManagement.css'
import { CardCountUsers } from '../../../layouts/cards_count/CardCountUsers'
import { CardCountSuspended } from '../../../layouts/cards_count/CardCountSuspended';
import { TableUsers } from '../../../layouts/tables/Tableusers'
import { TableSuspended } from '../../../layouts/tables/TableSuspended';
import Button from 'rsuite/Button'
import { useState } from 'react';

export const UserManagement = () => {
    
    const [activeTable, setActiveTable]=useState('activos')
    
    return(
        <>
            <h1>Gestión de Usuarios</h1>
            <div className='user-management'>
                <div className='user-view'>
                    <div className='place-buttons'>
                        <Button
                            color={activeTable === 'activos' ? 'green' : 'gray'}
                            appearance="primary"
                            onClick={() => setActiveTable('activos')}
                            className="boton-page-users"
                        >
                            Usuarios Activos
                        </Button>
                        <Button
                            color={activeTable === 'suspendidos' ? 'green' : 'gray'}
                            appearance="primary"
                            onClick={() => setActiveTable('suspendidos')}
                            className="boton-page-users"
                        >
                            Usuarios Suspendidos
                        </Button>
                    </div>
                    {activeTable === 'suspendidos' && <CardCountSuspended />}
                    {activeTable=== 'activos' && <CardCountUsers />}
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
                <div className='place-table'>
                    {activeTable === 'activos' && <TableUsers />}
                    {activeTable === 'suspendidos' && <TableSuspended />}
                </div>
            </div>
        </>
    )
}
