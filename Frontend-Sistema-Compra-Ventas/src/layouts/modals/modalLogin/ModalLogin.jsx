import '../ModalLogin.css';
import Modal from 'react-bootstrap/Modal';
import imagenLogin from '../../../assets/images/imagen-login.webp';
import Button from 'rsuite/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginAdministrador } from '../../../api/login';

export const ModalLogin = ({ show, onHide }) => {

    const [mensajeEnviado, setMensajeEnviado] = useState('');

    const [form, setFormData] = useState({
        email:'',
        password:'',
    });

    useEffect(() => {
        if (!show) {
            setFormData({
                email: '',
                password: ''
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
        const resultado = await loginAdministrador(form);
        console.log('Respuesta del servidor:', resultado);
        setMensajeEnviado(resultado.mensaje);

        if (resultado.exito) {
            setFormData(
                { email: '', password: '' }
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
                        <img className='imagen-login' src={imagenLogin} alt="Grupo de estudiantes" />
                    </div>
                    <div className='body-modal-form'>
                        <p className='title-modal'>Iniciar Sesión 🐲</p>
                        <form onSubmit={handleSubmit} className='form-login'>
                            <div className='form-group'>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    className='form-control'
                                    required 
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password"
                                    className='form-control'
                                    value={form.password}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <Button
                                className='button-login'
                                type="submit" 
                                color="blue" 
                                appearance="primary">Login
                            </Button>
                        </form>
                        <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}