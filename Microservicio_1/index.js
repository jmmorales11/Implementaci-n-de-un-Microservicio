const express = require('express');
const { Pool } = require('pg');  // Usamos Pool en lugar de Client
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Configuración de la conexión a PostgreSQL usando Pool
const pool = new Pool({
  host: process.env.DB_HOST,  // Usamos el nombre del contenedor PostgreSQL (en Docker Compose)
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Conectar a PostgreSQL
pool.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch((err) => console.error('Error al conectar a PostgreSQL:', err));

// Ruta para obtener todos los productos
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error' });
  }
});

// Ruta para obtener un producto por su ID
app.get('/productos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error' });
  }
});

// agregar un producto
app.post('/productos', async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ message: "campos incompletos" });
  }

  try {
    const result = await pool.query(
      'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, descripcion, precio, stock]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al agregar producto');
  }
});

//  actualizar un producto
app.put('/productos/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ message: "El nombre y el precio son obligatorios" });
  }

  try {
    const result = await pool.query(
      'UPDATE productos SET nombre = $1, descripcion = $2, precio = $3, stock = $4 WHERE id = $5 RETURNING *',
      [nombre, descripcion, precio, stock, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar producto');
  }
});

// eliminar un producto
app.delete('/productos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar producto');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
