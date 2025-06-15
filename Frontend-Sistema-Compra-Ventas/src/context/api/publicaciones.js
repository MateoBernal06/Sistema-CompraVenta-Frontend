
const obtenerPublicaciones = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.publicaciones || resultado;
    } catch (error) {
        return [];
    }
}


const publicacionesDelUsuario = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${id}/usuario`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.publicaciones || resultado;
    } catch (error) {
        return [];
    }
}


const agregarPublicacion = async (datos) => {
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion`, {
            method: 'POST',
            headers: {
                //'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: datos
        });

        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }
        return { exito: true, ...resultado };
        
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
}

const misPublicaciones = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion-user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.publicaciones || resultado;
    } catch (error) {
        return [];
    }
}


const editarPublicacion =  async (datos) => {
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${datos.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }
        return { exito: true, ...resultado };
        
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
}


const detallePublicacion = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/detalle/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.categorias || resultado;
    } catch (error) {
        return [];
    }
}

const eliminarPublicacion = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }
        return { exito: true, ...resultado };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
}

const buscarPublicacion = async (titulo) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${titulo}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.publicaciones || resultado;
    } catch (error) {
        return [];
    }
}


const publicacionVendida = async(id) =>{
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${id}/vendida`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }
        return { exito: true, ...resultado };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
}

const publicacionInactiva = async(id) =>{
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/publicacion/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }
        return { exito: true, ...resultado };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
}


export {
    obtenerPublicaciones,
    agregarPublicacion,
    misPublicaciones,
    editarPublicacion,
    detallePublicacion,
    eliminarPublicacion,
    buscarPublicacion,
    publicacionVendida,
    publicacionInactiva,
    publicacionesDelUsuario
}