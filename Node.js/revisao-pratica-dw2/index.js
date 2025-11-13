import express from 'express';
import connection from './config/sequelize-config.js';
import FilmesController from './controllers/FilmesController.js'
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use("/", FilmesController);

connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch((error) => {
    console.log(error)
});

connection.query("Create database if not exists filmes;").then(() => {
    console.log("O banco de dados está criado");
}).catch(error => {
    console.log(error);
});

const port = 8080
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Servidor iniciado com sucesso! http://localhost:${port}`);
    }
})