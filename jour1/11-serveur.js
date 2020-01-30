// créer un server en utilisant le module natif http
// ce module est disponible directement dans NodeJS

// attention toujours la même méthode

// 1 importer le module http
const http = require("http");

// 2 créer mon serveur 
const server = http.createServer();

// 3.1
// attention une requête et définir le call back

server.on("request" , function(req,res){
	// callback => fonct est exécutée uniquement lorsque l'on appelle l'adrese
    // http://localhost:3022
	// toutes les actions qui sont écrites ici vous être exécutées
    // uniquement si un internaute appelle le serveur
    
    if(req.url == "/"){
    	// http://localhost:3022
        res.write("page d'accueil");
        res.end();
    }
    
    if(req.url == "/blog")
    {
    	// http://localhost:3022/blog
        res.write("je suis dans la page de blog");
        res.end();
    }
});


//3.2 
// définir l'url et le port d'écoute
// en général le port => choisir le chiffre que vous voulez
// par contre utilise en utilise lors de la phase développement le localhost
// localhost = le script qui génére le serveur est socker sur la même machine
// que le shell 
server.listen(3022, "localhost")

// http://localhost:3022

// 