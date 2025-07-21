export const logoutUser = (setUser, navigate) => {
    try {
        // Limpiar todos los datos específicos del usuario en localStorage
        const keysToRemove = [
            'token',
            '_id', 
            'rol'
        ];

        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });

        if (setUser) {
            setUser({
                nombre: '',
                apellido: '',
                email: '',
                celular: '',
                direccion: '',
                rol: ''
            });
        }

        // Limpiar sessionStorage también por seguridad
        sessionStorage.clear();

        // Navegar al inicio
        if (navigate) {
            navigate('/');
        }
    } catch (error) {
        console.error('Error durante el logout:', error);
        // Fallback: forzar limpieza y navegación
        localStorage.clear();
        sessionStorage.clear();
        if (navigate) {
            navigate('/');
        }
    }
};

