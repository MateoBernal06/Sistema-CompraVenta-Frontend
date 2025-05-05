
import { CardSistem } from "../../../layouts/card/CardSistem";
import { FormPerfil } from "../../../layouts/forms/FormPerfil";
import { UpdatePassword } from "../../../layouts/forms/UpdatePassword";
import './styleProfileManagement.css'
import { CalendarPage } from "../../../layouts/calendar/CalendarPage";

export const ProfileManagement = () => {
    return (
        <>
            <h1>Gestión del Perfil</h1>
            <p className="subtitulo">Datos del administrador</p>
            <div className="place-component-admin">
                <CardSistem />
                <CalendarPage /> 
            </div>
            <p className="subtitulo">Datos del administrador</p>
            <div className="place-component-admin">
                <FormPerfil />
                <UpdatePassword/>
            </div>
        </>
    );
};