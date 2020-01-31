// jour3/03-tableau-suite.js

// recherche dans un tableau
const resultat = [1,2,3,4] ;

// modifier l'élément qui contient la valeur 2

// avant de modifier, d'abord, il faut le trouver dans le tableau
// find()
// 1 seul argument => fonction 

// resultat.find(function(){});

const indexDeux = resultat.find(function(item){
    return item === 1 ;
});

console.log(indexDeux); // retourner si l'élément est bien présent dans le tableau

// nodemon 03-tableau-suite.js


// l'index dans le tableau
const index = resultat.indexOf("hello"); // si present retourne son index +1 et sinon -1
console.log(index);

// tableau qui contient des objets => collection

const t = [
    { id : 1 },
    { id : 2 },
    { id : 3 },
    { id : 10 }
];

/* const el = t.find(function(el){
    return el.id = 10
});

console.log(where); */


