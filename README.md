


# 🚀 React Router v7 Project CLI

Este es un pequeño CLI interactivo que te ayuda a crear una estructura moderna para un proyecto con **React Router v7**, **TailwindCSS**, **Vite** y **TypeScript**. Ideal para comenzar de forma rápida con un entorno bien organizado y listo para escalar.

---

# 🧩 ¿Qué hace este CLI?

Cuando ejecutas este CLI, te permite:

1. Elegir el nombre del proyecto.
2. Seleccionar la ruta de destino donde se guardará.
3. Decidir si deseas inicializar un repositorio Git.
4. Generar una estructura de archivos lista para usar con React Router v7.
5. Instalar automáticamente todas las dependencias necesarias.

---

# 📁 Estructura generada

```bash
mi-proyecto/
├── app/
│   ├── routes/
│   │   └── home.tsx       # Página principal con animaciones en canvas y estilo moderno
│   ├── app.css            # Importación de TailwindCSS
│   ├── root.tsx           # Estructura del layout + ErrorBoundary
│   └── routes.ts          # Definición de rutas
├── public/                # Carpeta pública
├── tsconfig.json          # Configuración de TypeScript
├── vite.config.js         # Configuración de Vite con plugins necesarios
├── react-router.config.ts # Configuración base de React Router
├── package.json           # Scripts y dependencias
````

---

# 🧪 Tecnologías usadas

* [React 19](https://react.dev/)
* [React Router v7](https://reactrouter.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)

---

# ▶️ ¿Cómo usarlo?

# Opción 1: Usar directamente con NPX (recomendado)

Si solo quieres obtener el template base para un proyecto con React Router v7, puedes ejecutarlo directamente sin necesidad de clonar el repositorio:

```bash
npx react-router-cli
```

Esto generará automáticamente la estructura del proyecto con las configuraciones necesarias.

---

# Opción 2: Clonar el repositorio y trabajar localmente

Si deseas modificar el CLI o contribuir con mejoras, puedes clonar el repositorio y trabajar desde ahí:

```bash
git clone https://github.com/codegeekery/react-router-cli-codegeekery.git
cd react-router-cli
npm install
```


---

## 🎨 Página de inicio

La página `home.tsx` contiene una animación con partículas en canvas y un diseño visualmente atractivo con clases de TailwindCSS, ideal como punto de partida para construir tu aplicación.

---

## ✨ Contribuciones

¡Sugerencias, mejoras y PRs son bienvenidos!
