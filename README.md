# Implementación de un Microservicio de Productos con PostgreSQL y Docker

Este proyecto es un microservicio que expone una API REST para gestionar productos. Utiliza **Node.js** con **Express** para la API y **PostgreSQL** como base de datos. El servicio está completamente dockerizado, lo que permite ejecutarlo de manera sencilla en cualquier entorno.

## Requisitos

- Docker y Docker Compose instalados en tu máquina.

## Funcionalidades

- **Obtener todos los productos**: `GET /productos`
- **Obtener un producto por ID**: `GET /productos/:id`
- **Agregar un nuevo producto**: `POST /productos`
- **Actualizar un producto**: `PUT /productos/:id`
- **Eliminar un producto**: `DELETE /productos/:id`

## Instrucciones de Uso

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/microservicio_de_productos.git
```
Una vez estando dentro de la carpeta, ejecuta el siguiente comando
### 2. Construir y ejecutar los contenedores Docker
```bash
docker-compose up --build
```

### 3. Acceso a la API
Al levantar los contenedores, la api estara disponible en la siguiente ruta http://localhost:3000/...., puedes interactuar usando thunder client

### 4. Explicacion de los endpoints
Para mostrar utiliza el siguiente comando 
