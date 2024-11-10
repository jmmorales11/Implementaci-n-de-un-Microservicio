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
## Microservicio 1
Una vez estando dentro de la carpeta, Microservicio_1 ejecuta el siguiente comando
### 1. Construir y ejecutar los contenedores Docker
```bash
docker-compose up --build
```

### 2. Acceso a la API
Al levantar los contenedores, la api estara disponible en la siguiente ruta http://localhost:3000/...., puedes interactuar usando thunder client

### 3. Explicacion de los endpoints
Para mostrar utiliza el siguiente enlace
```bash
http://localhost:3000/productos
```

Para agregar utiliza el siguiente enlace
```bash
http://localhost:3000/productos
```
El cuerpo del json es el siguiente, cambia los datos segun las necesidades
```bash
{
  "nombre": "Producto Ejemplo",
  "descripcion": "Descripción del producto ejemplo",
  "precio": 99.99,
  "stock": 10
}
```
Para el actualizar utiliza el siguiente enlace y el mismo cuerpo del agregar
```bash
http://localhost:3000/productos/:id
```
Para el eliminar usa el siguiente enlace 
```bash
http://localhost:3000/productos/:id
```

