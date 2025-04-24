import { Router } from 'express';
import controladorUsuario from'../controllers/usuario.controller.js';


const enrutadorUsuarios=Router();

// Ruta para obtener un usuario por ID
enrutadorUsuarios.get('/:id', controladorUsuario.leerUsuario);

// Ruta para crear un usuario
enrutadorUsuarios.post('/', controladorUsuario.crearUsuario);

// Ruta para obtener todos los usuarios
enrutadorUsuarios.get('/', controladorUsuario.leerTodosLosUsuarios);



export default enrutadorUsuarios;