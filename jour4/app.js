// jour4/app.js

// lancer le shell dans le dossier qui contient app.js
// créer le fichier package.json => npm init --yes
// télécharger deux modules :  
// npm i express
// npm i @hapi/joi 

// démarrer le serveur => nodemon app.js

// 1ère chose installer les deux librairies

const express = require("express");
const Joi = require("@hapi/joi");

// créer ma collection qui contient toutes mes datas
// copier / coller depuis le site de formation 

const categories = [
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
];

const app = express(); // je viens de créer mon serveur

// récupérer la liste complète de toutes les catégories dans la collection categories

app.get("/", function(req, res){
    // le serveur va renvoyer la variable à 100% 
    // si je l'appelle avec l'url suivant 
    // http://localhost:4004 et la méthode GET
    res.send(categories);
});

// récupérer 1 seule catégorie qui est stockée dans la variable categories

app.get("/:id", function(req, res){
    // récupérer l'id qui a été transmis dans l'url
    const id = req.params.id;
    // vérifier que il existe bien un article avec l'id demandé
    // .find()
    // si c'est ok => retourne l'élément recherché
    // si ko => retourner undefined
    const categorie = categories.find(function(item){
        return item.id === parseInt(id) ;
    }) ;
    // si il n'existe pas alors => répondre NON code erreur 404
    if(!categorie){
        res.status(404).send("il n'existe de catégorie avec l'id "+id);
        return ; 
    }
    // si il existe
    // renvoyer la réponse 
    const index = categories.indexOf(categorie);
    res.send(categories[index]);
    // POSTMan => nouvel onglet 
    // GET 
    // http://localhost:4004/1
    // http://localhost:4004/2
    // http://localhost:4004/44
});

app.use(express.json()); // OBLIGATOIRE POUR faire fonctionner le POST
                        // OBLIGATOIREMENT AVANT le POST

app.post("/",function(req, res){

    // récupérer les informations (JSON) qui sont envoyées depuis POSTMAN

    const body = req.body; //  ici que je récupère le JSON 

    // vérification 
    // création d'un schema 

    // est que il y a un attribut qui a pour nom id ?
    // est que il y a un attribut qui a pour nom id et qui est un chiffre ?
    // est que il y a un attribut qui a pour nom id et qui est un chiffre positif ?
    // est que il y a un attribut qui a pour nom nom ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine de caractères ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine 3 caractères min  ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine 255 caractères max  ?
    const schema = Joi.object({
        id : Joi.number().min(0).required(),
        nom : Joi.string().min(3).max(255).required()
    });

    // vérification = comparaison

    const verif = schema.validate(body);

    /*
    {
        "id" : 4,
        "nom" : "autre catégorie"
    }
    */ 

    res.send(verif);
    

    // si ce n'est pas conforme => NON je ne peux pas traiter + dire pourquoi

    // si c'est conforme alors je vais ajouter à la suite le JSON dans la variable categories  
    
});


app.listen(4004);

