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
})


module.exports = router;
