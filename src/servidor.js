import express from 'express';

// Importar las rutas
import productoRoutes from './routes/producto.routed.js';
import usuarioRoutes from './routes/usuario.routes.js'; // si ya lo tienes configurado

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/usuarios', usuarioRoutes); // opcional

// Ruta base (opcional)
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

export default app;