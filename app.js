const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuario.routed');

dotenv.config(); // Carga las variables de entorno desde .env
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para analizar los cuerpos de las solicitudes en formato JSON

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.log('Error al conectar a MongoDB:', error));

// Rutas
app.use('/api', usuarioRoutes); // Asocia las rutas de usuarios

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});