const express = require("express");

const app = express();

app.get("/" , function(req, res){
    const article = {
        id : 1,
        titre : "Article n°2",
        contenu : "contenu du premier article",
        categorie: ["tuto", "javascript"]
    };
    res.send(article);
});

app.get("/profils", function(req, res){
    const profils = [
        {
            id : 1,
            prenom : "Alain"
        },
        {
            id : 2 ,
            prenom : "Béatrice"
        }
    ];
    res.send(profils);
});

// pour express => :id => 
// http://localhost:5000/articles/1
// http://localhost:5000/articles/2
// http://localhost:5000/articles/3
app.get("/articles/:id", function(req, res){

    const id = req.params.id ;
    const articles = [
        {
            id : 1,
            titre :"article n°1"
        },
        {
            id : 2 ,
            prenom : "article n°2"
        }
    ];
    res.send(articles[id -1]);
})

app.listen(5000);

// nodemon 07-first-server-express.js

// http://localhost:5000
// http://localhost:5000/profils
