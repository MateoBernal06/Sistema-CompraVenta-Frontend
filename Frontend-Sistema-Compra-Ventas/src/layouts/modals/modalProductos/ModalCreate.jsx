import { useEffect, useState } from 'react';
import { agregarPublicacion } from '../../../context/api/publicaciones';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import { toast } from 'react-toastify';
import { obtenerCategorias } from '../../../context/api/categorias';
import Message from 'rsuite/Message'

export const ModalCreate = ({ show, onHide, onSave })=>{
    
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setFormData] = useState({
        titulo:'',
        descripcion:'',
        categoria: '',
        imagen: null,
        precio: ''
    });

    useEffect(()=>{
        if (show) {
            obtenerCategorias().then(data => setCategorias(data));
        }
        if (!show) {
            setFormData({
                titulo: '',
                descripcion: '',
                categoria: '',
                imagen: '',
                precio: ''
            });
        }
    }, [show]);

    const handleChange = (e) => {
        if (e.target.name === "imagen") {
            setFormData({
                ...form,
                imagen: e.target.files[0]
            });
        } else {
            setFormData({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titulo', form.titulo);
        formData.append('descripcion', form.descripcion);
        formData.append('categoria', form.categoria);
        formData.append('imagen', form.imagen); 
        formData.append('precio', form.precio);

        const resultado = await agregarPublicacion(formData);
        setLoading(false)

        if (resultado.exito) {
            toast.success(resultado.mensaje || 'Publicación creada correctamente');
            onSave(resultado.publicacion || resultado);
            onHide();
            setForm({
                titulo: '',
                descripcion: '',
                categoria: '',
                precio: '',
                imagen: ''
            });
        } else {
            toast.error(resultado.mensaje || 'Error al crear la publicación');
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
                <Modal.Body className='body-modal-update'>
                    <div className='normas-container'>
                        <Message showIcon type="warning" header="Normativas del sistema" >
                            <ul className='list-create'>
                                <li>
                                    <b>1. Contenido prohibido:</b> No está permitido publicar artículos o servicios que sean:
                                    <ul>
                                    <li>Ilegales o que infrinjan leyes locales o internacionales.</li>
                                    <li>Obscenos, ofensivos o con contenido sexual explícito.</li>
                                    <li>Engañosos, fraudulentos o relacionados con estafas.</li>
                                    <li>Violentos o que inciten al odio o discriminación.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>2. Moderación:</b> Las publicaciones serán revisadas por administradores. 
                                    Si una publicación infringe alguna de estas normas, podrá ser eliminada sin previo aviso.
                                </li>
                                <li>
                                    <b>3. Sanciones:</b> En caso de violaciones graves o reiteradas, el usuario podrá 
                                    ser suspendido de la plataforma por el tiempo que el administrador considere necesario.
                                </li>
                            </ul>  
                        </Message>
                    </div>
                    <div className='body-modal-form'>
                        <p className='title-modal'>Crear Publicacion</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group-create'>
                                <label htmlFor="titulo">Titulo</label>
                                <input
                                    type="text"
                                    id="titulo" 
                                    name="titulo"
                                    className='form-control'
                                    value={form.titulo}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className='form-group-create'>
                                <label htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    className='form-control-detalle'
                                    value={form.descripcion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group-create'>
                                <label htmlFor="categoria">Categoria</label>
                                <select
                                    type="text"
                                    id="categoria"
                                    name="categoria"
                                    className='form-control-categoria'
                                    value={form.categoria}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categorias.map(cat => (
                                        <option key={cat._id} value={cat._id}>
                                            {cat.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
        
                            <div className='form-group-create'>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    type="file"
                                    id="imagen"
                                    name="imagen"
                                    className='form-control'
                                    accept="image/png, image/jpeg, image/webp"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group-create'>
                                <label htmlFor="precio">Precio</label>
                                <input
                                    type="text"
                                    id="precio"
                                    name="precio"
                                    className='form-control'
                                    value={form.precio}
                                    onChange={handleChange}
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                    required
                                />
                            </div>
                            <div className='form-group-create'>
                                <Button
                                    type='submit' 
                                    color="blue"
                                    className='button-login' 
                                    appearance="primary">Crear
                                </Button>
                                <Button
                                    appearance="primary" 
                                    color="red"
                                    className='button-login'
                                    onClick={onHide}>Salir
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}