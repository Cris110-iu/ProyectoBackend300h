import express from 'express';
const router = express.Router();
import { 
  crearProducto, 
  obtenerProductos, 
  obtenerProductoPorId, 
  actualizarProducto, 
  eliminarProducto 
} from '../controllers/producto.controljerts.js';  // Asegúrate de usar la extensión .js

// Rutas CRUD para productos
router.post('/', crearProducto);                    // Crear producto
router.get('/', obtenerProductos);                  // Obtener todos los productos
router.get('/:id', obtenerProductoPorId);           // Obtener producto por ID
router.put('/:id', actualizarProducto);             // Actualizar producto
router.delete('/:id', eliminarProducto);            // Eliminar producto

export default router;