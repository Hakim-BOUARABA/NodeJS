// jour1/9-module.js

// rappel => tout ce que vous allez écrire dans ce fichier 
// ne sera visible que dans ce fichier 
// portée locale 

const lib = {
    nom : "ma première librairie",
    version : 1.1,
    role : "generer du lorem ipsum",
    action : function(){
        console.log("lorem ipsum");
    }
}

// je vais avoir besoin de mon objet et de ce qu'il stocke 
// pour pouvoir l'utiliser dans un autre fichier => explicitement
// l'exporter 

// cette ligne => spcialement pour Nodejs 
module.exports.lib = lib ;
// module est un objet créé par NodeJS
// un peu comme l'objet document qui est créé par javascript

const formation ={
    sujet : "informatique",
    duree : 4,
    unite : "mois" 
}

module.exports.formation = formation;

const date = "29 janvier 2020";

module.exports.date = date;