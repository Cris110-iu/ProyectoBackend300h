import productoSchema from "../models/productos.js"
// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new productoSchema(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el producto', error });
  }
};

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoSchema.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos', error });
  }
};

// Obtener un solo producto por ID
export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await productoSchema.findById(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto', error });
  }
};

// Actualizar un producto
export const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await productoSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productoActualizado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto
export const eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await productoSchema.findByIdAndDelete(req.params.id);
    if (!productoEliminado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
  }
};

