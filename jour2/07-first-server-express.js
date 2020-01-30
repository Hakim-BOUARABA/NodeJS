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

app.listen(5000);

// nodemon 07-first-server-express.js

// http://localhost:5000
