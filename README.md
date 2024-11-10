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


## Microservicio 2
Una vez estando dentro de la carpeta, Microservicio_2 ejecuta el siguiente comando
### 1. Construir la imágen en docker y contenedores
```bash
 docker build -t product-microservice .
```

### 2.Levantamos los contenedores creados
```bash
 docker-compose up --build
```

### 3. Creamos la tabla ingresando dede el cmd con el comando
 ```bash
 docker exec -it postgres_service2 psql -U postgres -d mi_base_de_datos
```
 ```bash
 CREATE TABLE productos (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL,
 descripcion TEXT,
 precio DECIMAL(10, 2) NOT NULL,
 stock INTEGER DEFAULT 0,
 fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```
 ```bash
  INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
 ('Laptop', 'Laptop de alta gama con procesador Intel Core i7', 1500.00, 10),
 ('Teclado', 'Teclado mecánico retroiluminado', 70.00, 50),
 ('Mouse', 'Mouse inalámbrico con sensor óptico', 25.00, 100),
 ('Monitor', 'Monitor 4K de 27 pulgadas', 300.00, 30),
 ('Impresora', 'Impresora multifuncional a color', 120.00, 15),
 ('Auriculares', 'Auriculares inalámbricos con cancelación de ruido', 85.00, 40),
 ('Smartphone', 'Smartphone con pantalla OLED de 6.5 pulgadas', 900.00, 25),
 ('Tablet', 'Tablet de 10 pulgadas con almacenamiento de 64GB', 250.00, 20),
 ('Disco Duro Externo', 'Disco duro externo de 1TB', 60.00, 80),
 ('Cámara', 'Cámara digital con lente de 20MP', 400.00, 5);
```

### 2. Acceso a la API
Al levantar los contenedores, la api estara disponible en la siguiente ruta http://localhost:3000/...., puedes interactuar usando thunder client

### 3. Explicacion de los endpoints
Para mostrar utiliza el siguiente enlace
```bash
http://localhost:3000/api/productos
```

Para agregar utiliza el siguiente enlace
```bash
http://localhost:3000/api/productos
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
http://localhost:3000/api/productos/:id
```
Para el eliminar usa el siguiente enlace 
```bash
http://localhost:3000/api/productos/:id
```
