import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
//Crear la app
const app = express();
//View Engine
app.set('view engine', 'pug');
app.set('views', './views');
//Public files
app.use(express.static('public'));
//Routing
app.use('/auth', usuarioRoutes);
//Puerto para el proyecto
const port = 3000 || '';
app.listen(port, () =>{
  console.log(`Aplicación corriendo en el puerto ${port}`);
})