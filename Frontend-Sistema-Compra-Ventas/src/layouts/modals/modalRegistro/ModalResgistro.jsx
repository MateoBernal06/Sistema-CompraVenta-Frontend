
import Modal from 'react-bootstrap/Modal';
import imagenRegistro from '../../../assets/photos/imagen-dos.webp';
import Button from 'rsuite/Button';
import '../ModalLogin.css';

export const ModalRegistro = ({ show, onHide }) => {

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Body className='body-modal'>
                    <div className='body-modal-form'>
                        <p className='title-modal'>Crea tu cuenta 🐲</p>
                        <form onSubmit={(e) => { e.preventDefault() }} className='form-login'>
                            <div className='form-group'>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name" 
                                    name="name"
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname">Apellido</label>
                                <input 
                                    type="text" 
                                    id="lastname" 
                                    name="lastname"
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
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone">Celular</label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone"
                                    className='form-control'
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="address">Dirección</label>
                                <input 
                                    type="text" 
                                    id="address" 
                                    name="address"
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
                            <Button color="red" appearance="primary" className='button-login'>Registrar</Button>
                        </form>
                    </div>
                    <div>
                        <img className='imagen-login' src={imagenRegistro} alt="Grupo de estudiantes" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}