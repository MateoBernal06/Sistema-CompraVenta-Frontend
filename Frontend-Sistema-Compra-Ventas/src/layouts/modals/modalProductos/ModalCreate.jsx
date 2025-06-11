import { useEffect, useState } from 'react';
import { agregarPublicacion } from '../../../context/api/publicaciones';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import { ToastContainer,toast } from 'react-toastify';
import { obtenerCategorias } from '../../../context/api/categorias';

export const ModalCreate = ({ show, onHide })=>{
    
    const [categorias, setCategorias] = useState([]);
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
        if (resultado.exito) {
            toast.success(resultado.mensaje || 'Publicación creada correctamente');
            if (onPublicacionCreada) onPublicacionCreada();
        } else {
            toast.error(resultado.mensaje || 'Error al crear la publicación');
        }
    };

    return (
        <>
        
            <Modal
                className='modal-create-producto'
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Body className='modal-body-tables'>
                    <div>
                        <p className='title-modal-categoria'>Crear Publicacion</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group-modal'>
                                <label htmlFor="titulo">Titulo</label>
                                <input
                                    type="text"
                                    id="titulo" 
                                    name="titulo"
                                    className='form-input-modal'
                                    value={form.titulo}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className='form-group-modal'>
                                <label htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    className='form-input-modal-area'
                                    value={form.descripcion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group-modal'>
                                <label htmlFor="categoria">Categoria</label>
                                <select
                                    type="text"
                                    id="categoria"
                                    name="categoria"
                                    className='form-input-modal-select'
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
        
                            <div className='form-group-modal-file'>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    type="file"
                                    id="imagen"
                                    name="imagen"
                                    accept="image/png, image/jpeg, image/webp"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group-modal'>
                                <label htmlFor="precio">Precio</label>
                                <input
                                    type="text"
                                    id="precio"
                                    name="precio"
                                    className='form-input-modal'
                                    value={form.precio}
                                    onChange={handleChange}
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                    required
                                />
                            </div>
                            <div className='form-group-modal-button'>
                                <Button
                                    type='submit' 
                                    color="blue" 
                                    appearance="primary">Crear
                                </Button>
                                <Button
                                    appearance="primary" 
                                    color="red"
                                    onClick={onHide}>Salir
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}