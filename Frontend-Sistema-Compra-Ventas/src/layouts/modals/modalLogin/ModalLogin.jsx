import '../ModalLogin.css';
import Modal from 'react-bootstrap/Modal';
import imagenLogin from '../../../assets/images/imagen-login.webp';
import Button from 'rsuite/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginAdministrador } from '../../../context/api/login';
import { loginEstudiante } from '../../../context/api/registro';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ModalLogin = ({ show, onHide }) => {

    const navigate = useNavigate();
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
    try {
        let resultado = await loginAdministrador(form);

        if (!resultado.exito) {
            resultado = await loginEstudiante(form);
        }

        if (resultado.exito) {
            localStorage.setItem('token', resultado.token);
            localStorage.setItem('rol', resultado.rol);
            localStorage.setItem('nombre', resultado.nombre);
            console.log(`Usuario logueado con rol: ${resultado.rol}`);

            if (resultado.rol === 'administrador') {
                navigate('/dashboard/gestion-usuarios');
            } else if (resultado.rol === 'estudiante') {
                navigate('/estudiante/publicaciones');
            } else {
                navigate('/');
            }

            setFormData({ email: '', password: '' });
            onHide(); 
        } else {
            toast.error(resultado.mensaje || resultado.msg || 'Error en el login');
        }

    } catch (error) {
        console.error(error);
        toast.error('Ocurrió un error en el servidor. Intenta más tarde.');
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