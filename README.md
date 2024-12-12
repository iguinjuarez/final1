# Proyecto: Gestión de Alumnos - Backend y Frontend

Este proyecto es una aplicación web que permite la gestión de alumnos a través de un sistema de inicio de sesión y la interacción con una base de datos. Está dividido en dos partes: backend (Node.js con Express y Sequelize) y frontend (React con React Router).

## Funcionalidades principales

1. **Inicio de sesión**:
   - Permite iniciar sesión utilizando una cuenta de Google.

2. **Gestión de alumnos**:
   - Agregar alumnos.
   - Mostrar alumnos en una tabla interactiva.
   - Buscar alumnos filtrando por apellido.

## Requisitos previos

1. Tener instalado:
   - [Node.js](https://nodejs.org/)
   - [MySQL](https://www.mysql.com/)

2. Configuración de la base de datos:
   - Crear una base de datos llamada `universidad`.
   - Usuario: `root`.
   - Contraseña: `12345678`.

## Estructura del proyecto

El proyecto está organizado en dos carpetas principales:

```
├── backend
├── frontend
```

### Backend
El backend está desarrollado con Express y Sequelize. Se encarga de gestionar la API, conectar con la base de datos y manejar la lógica del negocio.

### Frontend
El frontend está desarrollado con React y React Router. Proporciona la interfaz de usuario para interactuar con las funcionalidades del sistema.

## Instrucciones de instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

### 2. Configurar el backend
1. Navegar a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Configurar el archivo `.env` (si no existe, crearlo) con los siguientes datos:
   ```env
   DB_NAME=universidad
   DB_USER=root
   DB_PASS=12345678
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```
4. Ejecutar las migraciones para inicializar la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Iniciar el servidor del backend:
   ```bash
   npm start
   ```

### 3. Configurar el frontend
1. Navegar a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar la aplicación de React:
   ```bash
   npm start
   ```

## Uso

1. Abrir la aplicación en el navegador (por defecto en [http://localhost:3000](http://localhost:3000)).
2. Iniciar sesión utilizando una cuenta de Google.
3. Acceder a la funcionalidad de gestión de alumnos:
   - Agregar un nuevo alumno.
   - Ver la lista de alumnos en la tabla.
   - Utilizar la barra de búsqueda para filtrar por apellido.

## Tecnologías utilizadas

### Backend
- Node.js
- Express
- Sequelize
- MySQL

### Frontend
- React
- React Router

## Contribución
¡Las contribuciones son bienvenidas! Por favor, crea un *fork* del repositorio, realiza los cambios necesarios y envía un *pull request*.

## Licencia
Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
