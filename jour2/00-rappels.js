// Rappels jour1

/*
Node.js => environnement d'exécution de Javascript 
nous allons pouvoir créer de fichier .js et les exécuter hors d'un navigateur

1 on doit ouvrir un shell 
2 se placer dans le dossier qui contient le fichier js
    cd le chemin du dossier qui contient le fichier js
    cd = change directory = changer de dossier
3 node nom-du-fichier.js puis Enter
    Attention !!!!!!!!!! ne pas mettre d'espace / de majuscule / de caractères accentués
    dans les noms de fichiers 

-----------

exécution dans le shell ET résultat dans le shell aussi 


-----------

nous allons créer des fichiers javascript => fichier = 1 module
tout ce que vous allez écrire dedans => local (scope = portée des variables)

si je veux découper mon travail sur plusieurs fichiers
il faut explicitement le dire

dans le fichier qui contient les fonctions et / ou les données 

module.exports.variable = variable

dans le fichier qui va importer les informations 

const {variable} = require("./fichier")

-----------

Il existe des modules natifs => http

ce module très intéressant car => ce que l'on va faire avec Node

Node permet de créer des back office = Serveur


*/