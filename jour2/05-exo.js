// est que underscore est disponible dans mon projet ???
// package.json => propriété dependencies => OK

const _ = require("underscore");

const tableau = [0, 12, 4, 2, 5];
// vérifier que ce tableau contient la valeur 2 sur un de ses éléments 

function verif(tableau, nombre){
    for(let i = 0 ; i < tableau.length ; i++){
        if(tableau[i] === nombre){
            return true
        }
        return false ;
    }
}


// utiliser underscore

const verifNombre  = _.contains(tableau , 2);

console.log(verifNombre);

// node 05-exo.js


// pour installer la librairie mongoose => dans le shell
// est ce que j'ai un fichier package.json npm init --yes
// npm i mongoose
// librairie elle même a besoin d'autres librairies pour fonctionner 
// 21 librairies simulténamément en 1 commande 

// npm install nodemon -g
// npm i nodemon -g
// npm i -g nodemon 
// npm i --global nodemon


// i => faire fonctionner mon projet
// i + -g => pour aider le développeur


// npm i -g nodemon

// nouvel outil en ligne de commande 