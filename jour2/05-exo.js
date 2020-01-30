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

