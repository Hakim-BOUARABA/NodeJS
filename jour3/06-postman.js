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

// récupérer un seul élément dans ma base de donnée 
// http://localhost:2500/1
// http://localhost:2500/2
// http://localhost:2500/3
app.get("/:id", function(req, res){
    // 1 récupérer le numéro qui a été saisi dans l'url

    const id = req.params.id ;

    // réchercher si il existe bien un élément dans le tableau qui a l'_id id 
    const article = bdd.find(function(item){
        return item._id === parseInt(id);
        // parseInt("1") => 1
    })

    const verif = 20 > 2 ;
    const verif2 = 20 < 2 && 3 > 4 ;
    //              false && false
    //              false 
    const verif3 = 20 > 2 && 3 > 4 ;
    //              true && false
    //              false

    const verif4 = 20 > 2 || 3 > 4 ;
    //              true || false
    //              true 

    const verif5 = !(20 > 2 || 3 > 4) ;
    //              !(true || false)
    //              !(true)
    //              false

    const verif6 = undefined ;
    //              false 


    const verif7 = !undefined ;
    //              !false
    //              true

    const verif8 = { _id : 1, prix : 20} ;
    //              true

    const verif9 = !{ _id : 1, prix : 20} ;
    //              !true
    //              false

    if(!article){
        res.status(404).send("aucun produit disponible avec l'id "+ id);
        return ;
    }

    res.send(article);

});
// pour ajouter un nouvel élément dans ma bdd => OBLIGATOIRE AVANT LE POST

// attention dans POSTMAN
/*
    {
        "nom" : "nouveau produit" 
    }

*/
// ajouter un nouvel élément à la fin du tableau bdd 
app.use(express.json()); 

app.post("/", function(req, res){
    const body = req.body;

    bdd.push(body);
    res.send(bdd);
});

// supprimer un élément dans bdd
//http://localhost:2500/1
app.delete("/:id", function(req, res){
    const id = req.params.id;
    // vérifier si l'élément existe bien dans la collection bdd
    const article = bdd.find(function(item){
        return item._id === parseInt(id);
    });
    if(!article){
        res.status(404).send(`l'article numéro ${id} est déjà supprimé`);
        return ;
    }
    // supprimer 
    const index = bdd.indexOf(article);
    bdd.splice(index , 1);
    res.send(bdd);
})

/*
update = mis à jour / modification 
le client doit envoyer 2 informations
Quel article je dois mettre à jour ???????
http://localhost:2500/1
ce que je veux modifier ???
body 
{
    "nom" : "nom modifié",
    "prix" :  33
}

*/

app.put("/:id",function(req, res){

    const id = req.params.id;
    const body = req.body;

    const article = bdd.find(function(item){
        return item._id === parseInt(id);
    });

    if(!article){
        res.status(404).send(`l'article n° ${id} n'existe`);
        return ;
    }

    // si c'est ok je peux effectuer la mis à jour
    const index = bdd.indexOf(article);

    bdd[index].nom = body.nom;
    bdd[index].prix = body.prix;

    res.send(bdd);

});



app.listen(2500); 
// shell nodemon 06-postman.js

// nodemon module qui détecte lorsque le code javascript est modifié / arrête et redémmarre


// https://formation.webdevpro.net/secu-app