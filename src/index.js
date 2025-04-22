import "dotenv/config";
import "./conexion.js";
import servidor from "./servidor.js";
servidor.listen(3000,()=>{
    console.log ("servidor esta escuchando al link http://localhost:3000")
});

