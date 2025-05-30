# Sistema de Compra-Venta - Frontend

Este proyecto es el frontend de un sistema de compra-venta desarrollado con React y Vite, orientado a la gestión de usuarios y productos para la comunidad estudiantil.

---

## Funcionalidades principales

- **LandingPage**: Página de inicio con navegación, carrusel y contenido informativo.
- **Registro y autenticación**:
  - Registro de nuevos usuarios.
  - Inicio de sesión para administradores y estudiantes.
  - Recuperación y restablecimiento de contraseña mediante token.
  - Confirmación de cuenta por correo electrónico.
- **Gestión de usuarios y productos**:
  - Panel de administración para gestión de perfiles, usuarios y productos.
- **Componentes reutilizables**:
  - Barra de navegación, carrusel, pie de página, modales personalizados.
- **Optimización y experiencia de usuario**:
  - Imágenes en formato `webp` y carga diferida (`loading="lazy"`).
  - Formularios validados y mensajes de feedback.
  - Uso de CSS personalizado, Bootstrap y Rsuite para estilos.

---

## Historial de actividades por sprint

### Sprint 0
- Configuración inicial del proyecto con Vite y React.
- Instalación de dependencias principales.
- Estructuración de carpetas y archivos base.

### Sprint 1
- Creación de páginas principales: LandingPage, Register, Login, Forgot Password, Restore Password.
- Implementación de rutas protegidas y públicas usando React Router.
- Desarrollo de componentes reutilizables: barra de navegación, carrusel, footer.
- Primeros estilos personalizados y uso de Bootstrap/Rsuite.

### Sprint 2
- Integración de autenticación con backend (API).
- Implementación de recuperación y restablecimiento de contraseña usando tokens en la URL (`/nuevo-password/:token`).
- Confirmación de cuenta mediante enlace con token (`/confirmar/:token`).
- Manejo de roles (admin/estudiante) en el login y almacenamiento en localStorage.
- Validaciones avanzadas en formularios y mensajes de error/éxito.
- Refactorización de componentes y hooks personalizados para formularios.
- Corrección de bugs y mejoras de experiencia de usuario.

---

## Próximos pasos
- Mejorar la cobertura de tests unitarios y de integración.
- Optimizar el rendimiento general del sistema.
- Documentar el flujo de autenticación y rutas protegidas.
- Agregar nuevas funcionalidades según feedback de usuarios.

---

## Instalación y ejecución

1. Clona este repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## Tecnologías utilizadas:
- React
- Vite
- Bootstrap
- Rsuite
- ESLint

