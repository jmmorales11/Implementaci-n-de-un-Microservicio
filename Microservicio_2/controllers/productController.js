const pool = require('../config/db');

exports.getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, descripcion, precio, stock]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const result = await pool.query(
            'UPDATE productos SET nombre = $1, descripcion = $2, precio = $3, stock = $4 WHERE id = $5 RETURNING *',
            [nombre, descripcion, precio, stock, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
