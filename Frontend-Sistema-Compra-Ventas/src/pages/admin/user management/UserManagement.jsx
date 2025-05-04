import './styleUserManagement.css'
import { CardCountUsers } from '../../../layouts/cards count/CardCountUsers'
import { TableUsers } from '../../../layouts/tables/Tableusers'
import Button from 'rsuite/Button'

export const UserManagement = () => {
    return(
        <>
            <h1>Gestión de Usuarios</h1>
            <div className='user-management'>
                <div className='user-view'>
                    <div className='place-buttons'>
                        <Button color="blue" appearance="primary" className='boton-page-users'>Mostrar usuarios</Button>
                        <Button color="green" appearance="primary" className='boton-page-users'>Ver usuarios suspendidos</Button>
                    </div>
                    <CardCountUsers />
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
                    <TableUsers/>
                </div>
            </div>
        </>
    )
}
