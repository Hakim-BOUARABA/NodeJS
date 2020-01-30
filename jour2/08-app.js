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
app.get("/", function(req, res){ // http://localhost:3022
    res.send(baseDeDonnee);
})

app.get("/tuto/:id", function(req, res){ // http://localhost:3022/tuto/1
    const id = req.params.id;
    res.send(baseDeDonnee[id -1]);
});

// http://localhost:3022
app.post("/" , function(req, res){
    // ajouter une nouvelle ligne dans le tableau baseDeDonnee
    const nouvelArticle = {
        "id" : 4 ,
        "name": "nouveau"
    };
    baseDeDonnee.push(nouvelArticle);
    res.send(baseDeDonnee);
});

app.use(express.json()); // fonction middleware 
// dans POSTMAN
// Menu déroulant POST
// url : http://localhost:3022/nouveau
// body > raw + Json
/* 
{
    "id" : 5 ,
    "name": "encore un nouvel article"
}
*/

app.post("/nouveau", function(req, res){
    const nouvelArticle = req.body; // => stocke ce que l'on va donner dans postman

    baseDeDonnee.push(nouvelArticle);
    res.send(baseDeDonnee);

})



app.listen(3022);
// Arrêter l'ancien script Ctrl + C puis O Enter
// nodemon 08-app.js


// postman => https://www.getpostman.com/downloads/

// client HTTP 
// réaliser l'ensemble des requête

/* 
GET
PUT 
POST 
DELETE */


/* {
    "id" : 4 ,
    "name": "nouveau"
} */