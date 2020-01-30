
// importer la lib native

const http = require("http");

// créer le serveur 

const server = http.createServer();

// définir ce que doit faire le server

server.on("request", function(req, res){
    // 
    if(req.url == "/"){
        res.write("bienvenue dans votre site internet");
        res.end();
    }
    // démarrer le serveur node 12-site-internet.js
    // http://localhost:3045

    // si vous modifier votre script => Arrête le schell

    if(req.url == "/presentation.html"){
        res.write("voici mon portfolio");
        res.end();
    }


    if(req.url == "/info.xml"){
        res.write("détails profil");
        res.end();
    }
});

server.listen(3045 , "localhost"); 