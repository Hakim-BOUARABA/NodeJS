// créer une API : back end complet
// pour gérer des profils utilisateurs
// télécharger les modules qui vont être obligatoires
// pour faire fonctionner notre back End
// lancer un shell dans le dossier qui contient app.js
// package.json => npm init --yes

// télécharger les modules dont on a besoin

// npm i express => server
// npm i @hapi/joi => sécu
// npm i mongoose => communiquer avec la base de données
// npm i cors => permettre de communiquer avec notre back end 

// cequ'il faut par défaut

// npm i lodash 
// nom i bcrypt => fonction qui permettent de crypter certaines données 


// pouvoir, via POSTMAN, Ajouter Modifier lire supprimer des profils utilisateurs
// qui sont stockés dans la base de données online

/** 
 {
     prenom : "Alain",
     nom : "Dupont",
     status : false ,
     age : 20 ,
     email : "m@yahoo.fr"
 }
 * 
*/

const express = require("express");
const mongoose = require("mongoose");
const routerProfil = require("./router/profil");

// spécial pour le fait que l'on va mettre en ligne notre projet
const cors = require("cors");

const app = express();

// fonction middleware 
app.use(cors()); // autoriser des sites internet à lui faire des requêtes
app.use(express.json()); // récupérer plus facile le body des requêtes POST et PUT

app.use("/profil",routerProfil ); // utiliser le router Profil

const urlBDD = "mongodb+srv://ifocop_admin:azerty1234@cluster0-yozxs.mongodb.net/test?retryWrites=true&w=majority"; // https://mlab.com/ => se connecter avec le compte que l'on a créé hier 
const optionConnexion = {
    useNewUrlParser : true ,
    useUnifiedTopology: true
};
// nodemon app.js
mongoose.connect(urlBDD , optionConnexion)
        .then(function(){
            console.log("connexion à la base de donnée est réussie");
        })
        .catch(function(err){
            console.log(err);
        })


// spéciale pour la mise en ligne de notre projet 
// || => opérateur boolean OU 
// && 
// process.env.PORT == récupére le port d'écoute de la machine
// sur l'ordinateur process.env.PORT == undefined
// 
const port = process.env.PORT || 2000 ;
//              undefined || 2000
//              2000
// wikipedia port protocole
// https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels


app.listen(port , function(){ 
    console.log("serveur lancé sur le port " + port);
});





