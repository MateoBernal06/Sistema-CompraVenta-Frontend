import { FaUserAlt } from "react-icons/fa";
import Button from 'rsuite/Button';
import { actualizarEstudiante, perfilEstudiante, actualizarPassword } from "../../context/api/estudiantes";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

export const UpdateInformation = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        direccion: ''
    });

    const [passwordForm, setPasswordForm] = useState({
        passwordActual: '',
        nuevaPassword: '',
        repetirPassword: ''
    });

    useEffect(() => {
        const cargarDatos = async () => {
            const estudiante = await perfilEstudiante();
            if (estudiante) {
                setForm({
                    nombre: estudiante.nombre || '',
                    apellido: estudiante.apellido || '',
                    celular: estudiante.celular || '',
                    direccion: estudiante.direccion || ''
                });
            }
        };
        cargarDatos();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await actualizarEstudiante(form);
        if (res.exito) {
            toast.success(res.msg || "Datos actualizados correctamente");
        } else {
            toast.error(res.msg || "Error al actualizar datos");
        }
    };


    const handlePasswordChange = (e) => {
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value
        });
    };


    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await actualizarPassword({
                passwordActual: passwordForm.passwordActual,
                nuevaPassword: passwordForm.nuevaPassword,
                repetirPassword: passwordForm.repetirPassword
            });
            if (res.exito) {
                toast.success(res.mensaje || "Contraseña actualizada correctamente");
                setPasswordForm({ passwordActual: '', nuevaPassword: '', repetirPassword: '' });
            } else {
                toast.error(res.mensaje || "Error al actualizar la contraseña");
            }
        } catch (error) {
            toast.error("Error de red o del servidor");
        }
    };


    return (
        <>
            <div>
                <h2 className="category-title">
                    <FaUserAlt size={24}/> Actualizar Información
                </h2>
                <p className="category-description">
                    Desde este apartado puedes actualizar tu información personal. Verifica que todos los campos estén 
                    correctamente completados antes de guardar los cambios, para asegurar que tus datos estén siempre 
                    actualizados y correctos.
                </p>
            </div>
            <div className="update-information-container">
                <form className="update-information-form" onSubmit={handleSubmit}>
                    <div className="form-group-update">

                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                className='form-control-update' 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <input 
                                type="text" 
                                id="apellido" 
                                name="apellido"
                                value={form.apellido}
                                onChange={handleChange}
                                className='form-control-update' 
                                required 
                            />
                        </div>
                    </div>
                
                    <div className="form-group-update">
                        <div className="form-group">
                            <label htmlFor="celular">Celular</label>
                            <input 
                                type="text" 
                                id="celular" 
                                name="celular"
                                value={form.celular}
                                onChange={handleChange}
                                className='form-control-update'
                                onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="direccion">Dirección</label>
                            <input 
                                type="text" 
                                id="direccion" 
                                name="direccion"
                                onChange={handleChange}
                                value={form.direccion}
                                className='form-control-update' 
                                required 
                            />
                        </div>

                    </div>
                    <div className="place-boton-update">
                        <Button 
                            type="submit" 
                            color="blue"
                            appearance="primary"
                            className='button-update-information'
                        >Guardar Cambios</Button>
                    </div>
                </form>
            </div>

            <div>
                <h2 className="category-title">
                    <FaUserAlt size={24}/> Actualizar Contraseña
                </h2>
                <p className="category-description">
                    Desde este apartado puedes actualizar tu contraseña. Asegúrate de completar correctamente 
                    todos los campos antes de guardar los cambios. Elige una contraseña segura que recuerdes 
                    fácilmente, pero que no sea fácil de adivinar.
                </p>
            </div>
            <div className="update-information-container">
                <form onSubmit={handlePasswordSubmit}>
                    <div className="form-group">
                        <label htmlFor="passwordActual">Contraseña Actual</label>
                        <input 
                            type="password" 
                            id="passwordActual" 
                            name="passwordActual"
                            onChange={handlePasswordChange}
                            className='form-control-update' 
                            required 
                            value={passwordForm.passwordActual}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nuevaPassword">Nueva Contraseña</label>
                        <input 
                            type="password" 
                            id="nuevaPassword" 
                            name="nuevaPassword"
                            className='form-control-update' 
                            required 
                            value={passwordForm.nuevaPassword}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="repetirPassword">Confirmar Nueva Contraseña</label>
                        <input 
                            type="password" 
                            id="repetirPassword" 
                            name="repetirPassword"
                            className='form-control-update' 
                            required 
                            value={passwordForm.repetirPassword}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="place-boton-update">
                        <Button 
                            type="submit" 
                            color="blue"
                            appearance="primary"
                            className='button-update-information'
                        >Guardar Cambios</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
