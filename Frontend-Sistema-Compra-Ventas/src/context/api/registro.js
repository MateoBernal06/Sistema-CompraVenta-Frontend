
const loginEstudiante = async (datos) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
};


const registroEstudiante = async (datos) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/registro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }

        return { exito: true, mensaje: resultado.msg || 'Formulario enviado con éxito' };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
};


const recuperarEstudiante = async (datos) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/recuperar-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }

        return { exito: true, mensaje: resultado.msg || 'Formulario enviado con éxito' };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
};


const nuevaContrasenaEstudiante = async (datos) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/nuevo-password/${datos.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        if (!respuesta.ok) {
            return { exito: false, mensaje: resultado.msg || 'Error del servidor' };
        }

        return { exito: true, mensaje: resultado.msg || 'Formulario enviado con éxito' };
    } catch (error) {
        return { exito: false, mensaje: 'Error de red: ' + error.message };
    }
};


const loginAdministrador = async (datos) => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/administrador/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
};


export {
    loginEstudiante,
    registroEstudiante,
    loginAdministrador,
    recuperarEstudiante,
    nuevaContrasenaEstudiante
};


    