
const actualizarPassword = async (datos) => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/administrador/actualizar-password`, {
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

const perfilAdministrador = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/administrador/perfil`, {
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

const actualizarAdministrador = async (datos) => {
    try {
        const token = localStorage.getItem('token'); 
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/administrador/actualizar-datos`, {
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


const perfil = async () => {
    try {
        const token = localStorage.getItem('token');
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/administrador/perfil`, {
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


export {
    actualizarPassword,
    perfilAdministrador,
    actualizarAdministrador,
    perfil
}