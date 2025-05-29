
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import imagenRegistro from '../../../assets/photos/imagen-dos.webp';
import Button from 'rsuite/Button';
import { registroEstudiante } from '../../../api/registro';
import '../ModalLogin.css';

export const ModalRegistro = ({ show, onHide }) => {

    const [mensajeEnviado, setMensajeEnviado] = useState('');

    const [form, setFormData] = useState({
        nombre:'',
        apellido:'',
        email:'',
        direccion:'',
        password:'',
        celular:''
    });

    useEffect(() => {
        if (!show) {
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                direccion: '',
                password: '',
                celular: ''
            });
            setMensajeEnviado('');
        }
    }, [show])

    const handleChange = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await registroEstudiante(form);
        console.log('Respuesta del servidor:', resultado);
        setMensajeEnviado(resultado.mensaje);

        if (resultado.exito) {
            setFormData(
                { nombre: '', apellido: '', email: '', direccion: '', password: '', celular: '' }
            );
        }
    };

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Body className='body-modal'>
                    <div>
                        <img className='imagen-login' src={imagenRegistro} alt="Grupo de estudiantes" />
                    </div>
                    <div className='body-modal-form'>
                        <p className='title-modal'>Crea tu cuenta 🐲</p>
                        <form onSubmit={handleSubmit} className='form-login'>
                            <div className='form-group'>
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre" 
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="apellido">Apellido</label>
                                <input 
                                    type="text" 
                                    id="apellido" 
                                    name="apellido"
                                    value={form.apellido}
                                    onChange={handleChange}
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="celular">Celular</label>
                                <input 
                                    type="text" 
                                    id="celular" 
                                    name="celular"
                                    value={form.celular}
                                    onChange={handleChange}
                                    className='form-control'
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="direccion">Dirección</label>
                                <input 
                                    type="text" 
                                    id="direccion" 
                                    name="direccion"
                                    value={form.direccion}
                                    onChange={handleChange}
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <Button 
                                type='submit' 
                                color="red" 
                                appearance="primary" 
                                className='button-login'>Registrar
                            </Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}