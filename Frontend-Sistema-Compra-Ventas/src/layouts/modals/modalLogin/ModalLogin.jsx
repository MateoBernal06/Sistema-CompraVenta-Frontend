import '../ModalLogin.css';
import Modal from 'react-bootstrap/Modal';
import imagenLogin from '../../../assets/images/imagen-login.webp';
import Button from 'rsuite/Button';
import { Link } from 'react-router-dom';

export const ModalLogin = ({ show, onHide }) => {

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
                        <form onSubmit={(e) => { e.preventDefault()}} className='form-login'>
                            <div className='form-group'>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
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
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <Link to='/dashboard'><Button className='button-login' color="blue" appearance="primary">Login</Button></Link>
                        </form>
                        <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}