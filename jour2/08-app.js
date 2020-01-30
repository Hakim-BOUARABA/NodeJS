// jour2/08-app.js
const express = require("express");
const app = express();
const baseDeDonnee = [
    {
        id : 1,name : "tuto"
    },
    {
        id : 2 ,name : "js"
    },
    {
        id : 3 ,name : "angular"
    },
];
app.get("/", function(req, res){
    res.send(baseDeDonnee);
})

app.get("/tuto/:id", function(req, res){
    const id = req.params.id;
    res.send(baseDeDonnee[id -1]);
})
app.listen(3022);
// Arrêter l'ancien script Ctrl + C puis O Enter
// nodemon 08-app.js
