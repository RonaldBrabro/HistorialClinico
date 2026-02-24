# Historia Clinica

Aplicacion web para registrar una Historia Clinica Unificada. Incluye frontend Angular, backend API REST con JWT, y almacenamiento en memoria listo para migrar a PostgreSQL 18.

## Requisitos

- Node.js 18+
- npm 9+

## Instalacion

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

## Ejecucion

### Backend

```bash
cd backend
npm run dev
```

El API queda en http://localhost:3000

### Frontend

```bash
cd frontend
npm start
```

La aplicacion queda en http://localhost:4200

## Credenciales de prueba

- Usuario: clinica
- Contrasena: clinica123

## Notas

- El almacenamiento esta en memoria y preparado para migrar a PostgreSQL 18 sustituyendo el DAO por una capa de persistencia.
- El archivo de JavaScript puro se encuentra en frontend/src/assets/js/funciones_historia_clinica.js y se usa en la ruta "Demo JS".
