import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'rsuite/Button'
import { toast } from 'react-toastify';
import { editarPublicacion } from '../../../context/api/publicaciones';
import { obtenerCategorias } from '../../../context/api/categorias';

export const ModalUpdate = ({ show, onHide, publicacion, onSave })=>{
    
    const [categorias, setCategorias] = useState([]);
    
    const [form, setForm] = useState({
        id: '',
        titulo: '',
        descripcion: '',
        categoria: '',
        precio: '',
        imagen: ''
    });

    const [original, setOriginal] = useState({
        id: '',
        titulo: '',
        descripcion: '',
        categoria: '',
        precio: '',
        imagen: ''
    });

    useEffect(() => {
        if (show) {
            obtenerCategorias().then(data => setCategorias(data));
        }

        if (show && publicacion) {
            const data = {
                id: publicacion.id || publicacion._id || '',
                titulo: publicacion.titulo || '',
                descripcion: publicacion.descripcion || '',
                categoria: publicacion.categoria || ''
            };
            setForm(data);
            setOriginal(data);
            
        } else if (!show) {
            setForm({ id: '', titulo: '',descripcion: '',categoria: '', precio: '', imagen: '' });
            setOriginal({ id: '', titulo: '',descripcion: '',categoria: '', precio: '', imagen: '' });
        }
    }, [show, publicacion]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            form.titulo === original.titulo &&
            form.descripcion === original.descripcion &&
            form.categoria === original.categoria
        ) {
            toast.info('No se realizaron cambios en la publicación.');
            return;
        }

        const resultado = await editarPublicacion(form);

        if (resultado.exito) {
            toast.success(resultado.mensaje ||'Publicacion editada correctamente');
            onSave({
                ...publicacion,
                ...form
            });
            onHide();

        } else {
            toast.error(resultado.mensaje || 'Error al editar la publicacion');
        }
    };
    
    return(
        <>
            <Modal
                    size="sm"
                    show={show}
                    onHide={onHide}
                    centered
                >
                    <Modal.Body className='modal-body-update'>
                        <div className='body-modal-form'>
                            <p className='title-modal'>Actualizar Publicacion</p>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group-modal'>
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
                                <div className='form-group-modal'>
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
                                <div className='form-group-modal'>
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
                                <div className='form-group-modal'>
                                    <Button
                                        type='submit' 
                                        color="blue"
                                        className='button-login' 
                                        appearance="primary">Guardar Cambios
                                    </Button>
                                    <Button
                                        appearance="primary" 
                                        color="red"
                                        className='button-login'
                                        onClick={onHide}>
                                            Salir
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
            </Modal>
        </>
    )
}