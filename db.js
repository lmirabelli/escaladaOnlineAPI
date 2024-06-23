import mongoose from 'mongoose';

// URI de conexión a la base de datos
const DB_URI = process.env.DB_URI
// Conectar a la base de datos
mongoose.connect(DB_URI)
    .then(() => console.log('Servidor Conectado !!!'))
    .catch((err) => console.log(`Fallo la conexion por: ${err.message}`));