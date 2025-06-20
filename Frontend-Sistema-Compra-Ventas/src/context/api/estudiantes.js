
const obtenerEstudiantes = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/estudiantes`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.estudiantes || resultado;
    } catch (error) {
        return [];
    }
}

const buscarEstudiante = async (email) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/estudiantes/${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return [];
        }
        return resultado.estudiantes || resultado;
    } catch (error) {
        return [];
    }
}

const inactivarEstudiante = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/estudiantes/${id}`, {
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


const actualizarEstudiante = async (datos) => {
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/actualizar-datos`, {
            method: 'PATCH',
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


const perfilEstudiante = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/estudiante/perfil`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return null;
        }
        return { exito: true, ...resultado };
    } catch (error) {
        return null;
    }

}


const actualizarPassword = async (datos) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cambiar-password`, {
            method: 'PATCH',
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


export {
    obtenerEstudiantes,
    buscarEstudiante,
    inactivarEstudiante,
    actualizarEstudiante,
    perfilEstudiante,
    actualizarPassword
}