import './styleAdmin.css'
import { TableCategory } from '../../layouts/tables/TableCategory';
import { BiSolidCategory } from "react-icons/bi";


export const CategorysManagement = () => {
    return (
        <>
            <div>
                <h2 className="category-title">
                    <BiSolidCategory size={24}/> Gestión de Categorías
                </h2>
                <p className="category-description">
                    Administra y organiza las categorías de productos disponibles en el sistema. 
                    Desde aquí puedes crear, editar o inactivar categorías para mantener el catálogo 
                    bien estructurado y facilitar la navegación de los usuarios.
                </p>
            </div>
            <TableCategory />
        </>
    );
};
