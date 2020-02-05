// jour5/router/profil.js

// ici nous allons régérer l'ensemble des requêtes http 
//que l'on peut faire à notre serveur sur la ressource profil

const express = require("express");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const router = express.Router();

// schema des données => colonnes

const schemaProfil = mongoose.Schema({
    prenom : String,
    nom : String ,
    status : Boolean,
    age : Number,
    email : String
});

// lier le schema à la collection = Modèle

const Profil = mongoose.model("profil", schemaProfil);


router.post("/", async function(req, res){
    // récupérer le body de la requête post
    const body = req.body;
    // vérifier quelle est conforme à ce que l'on attend
    const schema = Joi.object({
        prenom : Joi.string().min(3).max(255).required(),
        nom : Joi.string().min(3).max(255).required(),
        status : Joi.boolean().required(),
        age : Joi.number().min(0).max(120).required(),
        email : Joi.string().email().required()
    });
    const verif = schema.validate(body);
    // si ko => message et stop exécution
    if(verif.error){
        res.status(400).send(verif.error.details[0].message);
        return ;
    }
    // si ok => ajouter dans la base de données MOngo un nouvel enregistrement
    const profil = new Profil(body);
    const resultat = await profil.save(); // asychrone => attendre que Mongo écrive 
    res.send(resultat);
});

// récupérer tous les profils
router.get("/", async function(req, res){
    // récupérer tous les profils enregistrés dans la base de données
    const resultat = await Profil.find() ; // asychrone =>
    res.send(resultat);
});

// récupérer 1 seul profil 

router.get("/:id", async function(req, res){
    // récupérer l'id qui a été transmis dans l'url
    const id = req.params.id;

    // vérifier que l'id est conforme
    // on n'est plus que des chiffres de base 1, 2 ...
    // par défaut MongoDB va générer _id : 5e3a9499d4546a08dce679de
    // dans le support => Jour3 > Relations entre les documents > 5 > ObjectId du Driver de MongoDB
    // 5e3a9499d4546a08dce679de
    // 5e3a95803357f3684c3d99e6

    const verifID = mongoose.Types.ObjectId.isValid(id);
    //si l'id n'est pas conforme => 400 bad request et stop
    if(!verifID){
        res.status(400).send("id donné n'est pas conforme");
        return ;
    }
    //res.send(verifID);
    // vérifier qu'il y a bien un profil avec l'id recherché
    const resultat = await Profil.find({_id : id});
    // si il n'y a pas de profil => 404 Not Found et stop 
    if(resultat.length === 0){
        res.status(404).send("aucun enregistrement avec l'id "+ id);
        return ;
    }
    // si tout est ok, je retourne le profil concerné
    res.send(resultat);
})



module.exports = router;
