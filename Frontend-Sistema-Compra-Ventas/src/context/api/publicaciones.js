
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

export {
    obtenerPublicaciones,
    agregarPublicacion,
    misPublicaciones
}