import './styleUserManagement.css'
import { CardCountSuspended } from '../../../layouts/cards count/CardCountSuspended'
import Button from 'rsuite/Button'
import { TableSuspended } from '../../../layouts/tables/TableSuspended';

export const SuspendedUsers = () => {
    return (
        <div>
            <h1>Gestion de usuarios suspendidos</h1>
            <div className='user-management'>
                <div className='user-view'>
                    <div className='place-buttons'>
                        <Button color="orange" appearance="primary" className='boton-page-users'>Mostrar usuarios suspendidos</Button>
                    </div>
                    <CardCountSuspended />
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
                    <TableSuspended/>
                </div>
            </div>
        </div>
    );
};

