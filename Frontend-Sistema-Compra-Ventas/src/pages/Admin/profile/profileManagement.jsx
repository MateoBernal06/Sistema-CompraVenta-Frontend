

import { CardSistem } from "../../../layouts/card/CardSistem";
import { CalendarPage } from "../../../layouts/calendar/Calendar";
import { FormPerfil } from "../../../layouts/forms/formPerfil";
import { UpdatePassword } from "../../../layouts/forms/UpdatePassword";
import './styleProfileManagement.css'

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