
import { CardSistem } from "../../../layouts/card/CardSistem";
import { FormPerfil } from "../../../layouts/forms/formPerfil";
import './styleGestionPerfil.css'

export const GestionPerfil = () => {
    return (
        <>
            <h1>Gestión de Perfil</h1>
            <div className="container-gestion-perfil">
                <CardSistem />
                <FormPerfil />
            </div>
        </>
    );
};