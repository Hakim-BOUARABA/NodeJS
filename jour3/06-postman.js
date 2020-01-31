// jour3/06-postman.js

// télécharger express =>
// ? package.json => shell npm init --yes
// télécharger le module express => shell npm i express

const express = require("express"); // télécharger le module

const app = express(); // créer le serveur 

// variable global => variable disponible partout dans le fichier 
// collection

const bdd = [
    {
        _id : 1 ,
        nom : "produit 1",
        prix : 30
    },
    {
        _id : 2 ,
        nom : "produit 1",
        prix : 15
    }
];

// READ ALL => voir tout ce qu'il est dans la variable bdd
// .get() 
// deux arguments
// url
// fonction => callback => les instructions dans la fonctions ne vont être exécutées
// QUE lorsque l'on va utiliser POSTMAN 
// le callback a lui même deux arguments 
// requete = la question posée par le client  POSTMAN 
// res = response = la réponse du serveur =>notre variable bdd
app.get("/", function(req , res){
    // si un client m'appelle => renvoyer la variable bdd en INTEGRALITE
    // si un client m'appelle avec l'adresse suivante : http://localhost:2500
    // => renvoyer la variable bdd en INTEGRALITE
    res.send(bdd);
});

// test




app.listen(2500); 
// shell nodemon 06-postman.js

// nodemon module qui détecte lorsque le code javascript est modifié / arrête et redémmarre
