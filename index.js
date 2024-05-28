
const express = require("express");
const app = express();
const port = 3001;

const { getComics , getComicsById } = require("./controllers/getComics");

app.get("/", getComics);

app.get("/:id" , getComicsById);

app.listen(port,()=> {    
    console.log(`Conectado ok en el puerto: ${port}`);
})
