import bcrypt from 'bcryptjs';
import usuarioSchema from '../models/usuario.js';


const controladorUsuario={
  crearUsuario: async (sol,res)=>{
    try{
      const {nombre,correo,contraseña,rol}=sol.body;
   const contraseñaProtegida= await bcrypt.hash(contraseña,6);
   const nuevoUsuario=new usuarioSchema({
    nombre,
    correo,
    contraseña:contraseñaProtegida,
    rol,
   });
   const usuarioCreado= await nuevoUsuario.save();
   if (usuarioCreado._id){
    respuesta.json({
      resultado:'excelente',
      mensaje: 'usuario creado',
      datos: usuarioCreado._id, 
    });
   }
    }catch(error){
      respuesta.json({
        resultado:'mal',
        mensaje: 'error al crear el usuario',
        datos: error, 
      });
    }
  },
  leerUsuario: async (sol,res)=>{
    try{
      const usuarioEncontrado = await usuarioSchema.findById(
        sol.params.id
      );
      if (usuarioCreado._id){
        respuesta.json({
          resultado:'excelente',
          mensaje: 'usuario leido',
          datos: usuarioEncontrado, 
        });
       }



    }catch(error){
      respuesta.json({
        resultado:'mal',
        mensaje: 'error al leer el usuario',
        datos: error, 
      });
    }
  }
};
export default controladorUsuario;