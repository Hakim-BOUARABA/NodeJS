const http = require("http");

const server = http.createServer();

server.on("request", function(req, res){

    if(req.url == "/"){
        res.write("Accueil");
        res.end();
    }

    if(req.url == "/erreur"){
        res.write("404");
        res.end();
    }

    if(req.url == "/nouveaute.php"){
        res.write("liste des nouveaux produits");
        res.end();
    }

    if(req.url == "/blog"){
        res.write("liste des derniers articles");
        res.end();
    }

});

server.listen(8888,"localhost");

// node 02-serveur.js => 