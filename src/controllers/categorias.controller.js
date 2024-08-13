import { pool } from '../db.js';

export const getCategorias = async (req, res) => {
    
    try {
        
        const [rows] = await pool.query('SELECT * FROM categorias') ;
        res.json(rows);
    } catch (error) {
       return res.status(500).json({
        message: 'Algo fue mal...'
       })
    }
    
};

export const getCategoria = async (req, res) => {
    const {id} = req.params
    try {
        
       
        const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?',[id]) ;
    
        if (rows.length <=0 ) return res.status(404).json({
            message:'Data not found'
        })
        res.json(rows[0]);
        //console.log(req.params);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal...'
           })
    }

};

export const createCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        
        
        const [rows] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?,?)', [nombre, descripcion])
        
        res.send({
            id: rows.insertId,
            nombre,
            descripcion
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal...'
           })
    }
};

export const updateCategoria = async (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion} = req.body;
    try {
        
    
        const [result] = await pool.query('UPDATE categorias SET nombre = IFNULL(?, nombre) , descripcion = IFNULL(?, descripcion)  WHERE id = ?', [nombre, descripcion, id])
    
        if (result.affectedRows === 0 ) return res.status(404).json({
            message:'Data not found'
        });
        
        const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?',[id]) ;
        res.json(rows[0]);
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal...'
           })
    }
};

export const deleteCategoria = async (req, res) => {
    const {id} = req.params
    try {
        
        const [result] = await pool.query('DELETE FROM categorias WHERE id = ?',[id]) ;
        
        if (result.affectedRows <= 0 ) return res.status(404).json({
            message:'Data not found'
        })
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal...'
           })
    }
    
};

