import { FaUserAlt } from "react-icons/fa";
import Button from 'rsuite/Button';
import { actualizarEstudiante, perfilEstudiante, actualizarPassword } from "../../context/api/estudiantes";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Message from 'rsuite/Message';
import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

export const UpdateInformation = () => {

    const { setUser } = useContext(UserContext);

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        direccion: '',
        direccion: '',
        rol: ''
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
            setUser(prev => ({
                ...prev,
                nombre: form.nombre,
                apellido: form.apellido,
                celular: form.celular,
                direccion: form.direccion,
                rol: form.rol || 'estudiante'
            }));
        
        } else {
            toast.error(res.mensaje || "Error al actualizar datos");
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
                <div className="recurda">
                    <Message  showIcon type="info" closable header="Recuerda">
                        Aquí puedes actualizar tu información personal. Verifica que todos los campos estén completos 
                        y correctos antes de guardar los cambios, para mantener tus datos siempre actualizados.
                    </Message>
                </div>
            </div>
            <div className="update-information-container">
                <form className="update-information-form" onSubmit={handleSubmit}>
                    <div className="form-group-update">

                        <div className="form-group-password">
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

                        <div className="form-group-password">
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
                        <div className="form-group-password">
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

                        <div className="form-group-password">
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
                <div className="recurda">
                    <Message  showIcon type="info" closable header="Recuerda">
                        Aquí puedes actualizar tu contraseña. Completa todos los campos correctamente y 
                        elige una contraseña segura que puedas recordar, pero que no sea fácil de adivinar.
                    </Message>
                </div>
            </div>
            <div className="update-information-container">
                <form onSubmit={handlePasswordSubmit}>
                    <div className="form-group-password">
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

                    <div className="form-group-password">
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

                    <div className="form-group-password">
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
