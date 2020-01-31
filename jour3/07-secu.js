// jour3/07-secu.js

// installer un nouveau module npm i @hapi/joi

const Joi = require("@hapi/joi");

// => est ce que le client m'a bien envoyé des informations CONFORMESS ?
// si ce n'est pas à 100% conforme => NON 

const article = {
    _id : 1,
    nom : "ne",
    infoEnPlus : "balbal"
}; 

// est ce que article contient bien la propriété _id  
// est ce que article contient bien la propriété nom  
// est ce que article contient bien la valeur de la propriété _id est un chiffre  
// est ce que article contient bien la valeur de la propriété nom est un chaine de caractères 
// est ce que article contient bien la valeur de la propriété nom est un chaine de caractères
// de minimum 2 caractères 

// définir schema = décrit tous les tests que je dois effectuer 
const schema = Joi.object({
    _id : Joi.number().required(),
    nom : Joi.string().min(2).required()
});

const verif = schema.validate(article);

console.log(verif);

// nodemon 07-secu.js


const profil = {
    prenom : "Alain",
    nom : "Dufour",
    email : "alain@yahoo.fr",
    tel : "010101010101",
    mdp : "azerty!"
};

const schemaProfil = Joi.object({
    prenom : Joi.string().min(3).max(255).required() ,
    nom : Joi.string().min(3).max(255).required() , 
    email : Joi.string().email().required() ,
    tel : Joi.string().min(10).max(15).required(), 
    mdp : Joi.string().alphanum().required()
});


const verif2 =  schemaProfil.validate(profil);

console.log(verif2);

// @hapi password