// Cargar variables de entorno
import 'dotenv/config';

// Conectar a la base de datos
import './conexion.js';

// Importar el servidor (app de Express)
import servidor from './servidor.js';

// Iniciar el servidor en el puerto definido
const PORT = process.env.PORT || 3000;

servidor.listen(PORT, () => {
  console.log(`Servidor está escuchando en http://localhost:${PORT}`);
});