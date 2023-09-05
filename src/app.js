import express from "express";
import db from "./utils/database.js";
import User from "./models/users.model.js";
import "dotenv/config";

User;
// el lugar donde vamos a desplegar el proyecto nos da una variable de entorno llamada PORT
const PORT = process.env.PORT ?? 8000;

//probar conexion con la base de datos
db.authenticate()
  .then(() => {
    console.log("Conexion correcta");
  })
  .catch((error) => console.log(error));

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error));

const app = express();

// health check
app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
