import express from "express"; 
import morgan from "morgan";
import cors from "cors";
import enrutadorUsuarios from "./routes/usuario.routes.js";

const servidor = express();
servidor.use (cors);
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/usuarios',enrutadorUsuarios);
servidor.get('/', (solicitud,respuesta)=>{
    respuesta.status(404).send("noencontrado");
});

export default servidor;