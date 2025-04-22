import mongoose from "mongoose";
mongoose
.connect(process.env.MONGODB_URI)
.then((dato)=>{
    console.log("estas conectado a la base de datos");

}).catch((error)=>{
    console.log("no se conecto a la base de datos");
});