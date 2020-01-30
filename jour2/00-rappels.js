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

const http = require("http");

const server = http.createServer()

server.on("request", fonction(req , res){});

server.listen(3222, "localhost")



cas n°1 :

créer un fichier 01-module.js
ce fichier va contenir une fonction 
    nom calculAire
    deux arguments largeur hauteur

    3 instructions 
        vérifier que largeur est un chiffre => typeof 
        vérifier que hauteur est un chiffre
        return la phrase suivante "le rectange a une largeur de largeur et une hauteur de hauteur et il a une aire de aire"

    export de la fonction    

-------

créer 01-main.js

    importer la fonction aire

    utiliser aire sur les valeurs suivantes :

    largeur : 22 - hauteur : 44
    largeur : "bonjour" - hauteur : 22
    largeur : 55 - hauteur :  "hello"

Exécuter le code dans le shell

*/
/*

créer un fichier 02-serveur.js

ce serveur va réaliser les actions suivantes 

si il reçoit la requête
http://localhost:8888 => il répond "Accueil"
http://localhost:8888/erreur => il répond "404"
http://localhost:8888/nouveaute.php  => il répond "liste des nouveaux produits"
http://localhost:8888/blog  => il répond "liste des dernières articles"

lancer le script dans le shell
tester via votre navigateur que le serveur fonctionne !
*/
