import {Router} from 'express';
import { getCategorias, createCategoria, updateCategoria, deleteCategoria, getCategoria  } from "../controllers/categorias.controller.js";

const router = Router();

router.get('/categorias', getCategorias )
router.get('/categorias/:id', getCategoria )
router.post('/categorias', createCategoria )
router.patch('/categorias/:id', updateCategoria) // patch para actualizar parcialmente, put para todos los datos
router.delete('/categorias/:id', deleteCategoria)

export default router; 
