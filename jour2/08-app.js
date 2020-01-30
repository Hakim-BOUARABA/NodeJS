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

});



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


// serveur et on a besoin d'ajouter des nouvelles informations dans un tableau

// POST => méthode HTTP => je souhaite ajouter un item dans un tableau

//=> { id : 1 , titre : "article 1"} objet en javscript
// => json   { "id" : 1 , "titre" : "article 1"}

// json => envoyer à notre server 
/* créer un méthode app.post("/nouveau" , function(req , res){
    const nouveau = req.body ;
    // ajouter dans notre tableau 
    méthode crée .push()
    const tab = [1, 2, 3];
    tab.push(4); // [1,2,3,4] // .push() méthode pour les variables de type tableau
    // permet d'ajouter à la fin un nouvel item

    tab.push("bonjour") ; tab vaut = [1,2,3,4 , "bonjour"]
    const nouveau = req.body ;
    const nouveau = { "id" : 1 , "titre" : "article 1"}
    baseDeDonnee.push(nouveau)

    [
        {
            id : 1,name : "tuto"
        },
        {
            id : 2 ,name : "js"
        },
        {
            id : 3 ,name : "angular"
        },
        { "id" : 1 , "titre" : "article 1"}
    ]

    res.send(baseDeDonnee)

})

*/