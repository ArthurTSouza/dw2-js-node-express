import express from 'express';
const app = express();

import FilmesController from './controllers/FilmesController.js'

app.use("/", FilmesController);
 
const port = 8080
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Servidor iniciado com sucesso! http://localhost:${port}`);
    }
})