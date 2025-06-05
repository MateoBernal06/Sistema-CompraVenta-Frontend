
const agregarCategoria = async (datos) => {
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categoria`, {
            method: 'POST',
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

const obtenerCategorias = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categoria`, {
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

const buscarCategoria = async (nombre) =>{
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categoria/${nombre}`, {
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

const editarCategorias = async (datos) =>{
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categoria/${datos.id}`, {
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

const inactivarCategorias = async(id) =>{
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categoria/${id}`, {
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
    agregarCategoria,
    obtenerCategorias,
    editarCategorias,
    inactivarCategorias,
    buscarCategoria
}