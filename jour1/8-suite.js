// jour1/8-suite.js

// nous avons vu les objets => nous allons les utiliser en permenance
// permet de bien structurer son code (ranger)

const calcul = {
    addition : function(){
        console.log(2 + 3);
    } ,
    soustraction : function(){
        console.log(2 -1);
    }
}; // définition de la variable

// utiliser => 
calcul.addition();

// dans le shell j'exécute mon code 
// node 8-suite.js
// attention il faut être dans le dossier jour1 

// pour utiliser plus vite les méthodes qui sont stockées dans la variable calcul
// destructurer notre objet

const {addition} = calcul ;

addition();

const javascript = {
    creation : 1996,
    environnement : "Internet Explorer",
    action : function(){
        console.log("modifier de manière dynamique une page web");
    }
}

// méthode classique 
console.log(javascript.creation);
javascript.action();
// node 8-suite.js

// nouvelle méthode pour utiliser des méthodes ou des propriétés stockées dans
// objet

// destructurer notre objet
const {creation , action} = javascript ;

console.log(creation);
action();

// node 8-suite.js
