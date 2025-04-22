import { Router } from 'express';
import controladorUsuario from'../controllers/usuario.controller.js';


const enrutadorUsuarios=Router();

// Ruta para crear un usuario
enrutadorUsuarios.post('/', controladorUsuario.crearUsuario);

// Ruta para obtener todos los usuarios
enrutadorUsuarios.get('/', controladorUsuario.leerUsuario);

export default enrutadorUsuarios;