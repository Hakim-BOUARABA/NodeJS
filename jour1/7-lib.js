// 7-lib.js

// rappels de javascript 
//var mot clé de javscript 
//const 
//let 

var hello = "bonjour"
var hello = 2 ;

// node 7-lib.js => aucune erreur à l'écran

const bonjour = 2 ; // variable dont la valeur ne change pas 
//const bonjour = 3;

// node 7-lib.js =>  erreur dans la console 
// attention vous êtes en train de rédefinir la variable

const jour = "Lundi";
//jour = "Mardi";

// node 7-lib.js
// attention vous êtes en train de changer la valeur de la variable

let day = "Lundi" ;
//let day = "Mardi" ;

//node 7-lib.js
// attention vous êtes en train de rédefinir la variable

let week = 2 ;
week = 3 ;
//node 7-lib.js => pas d'erreur



// en informatique, on a besoin de beaucoup de variable lorsque l'on fait un programme
// donc nous allons devoir réaliser de nombreux 
// const variable = 2;
// const variable2 = 2;
// const variable3 = 2;
// en javascript => variable de type objet 

const fenetre = {
    largeur : 250,
    hauteur : 400,
    unite : "px" 
};

console.log(fenetre.hauteur);

// node 7-lib.js

const voiture = {
    marque : "Peugeot" ,
    modele : 206 ,
    anneeAchat : 2020,
    proprietaire : {
        nom :"Alain",
        age : 24
    }
}

console.log(voiture.proprietaire.age);

// node 7-lib.js
// cls => nettoyer le shell
// 
// via la variable voiture afficher dans la console modele du vehicule

console.log(voiture.modele);

// node 7-lib.js

const nb1 = 3 ;
const nb2 = 10 ;
const total = nb1 + nb2 ; // addition

console.log(total);

// node 7-lib.js

const prenom = "Victor";
const nom = "Hugo" ;
const auteur = prenom + nom ; // concaténation addition de chaine de carctères
// concaténer à l'ancienne
console.log(auteur);

// node 7-lib.js

const auteur2 = `${prenom} ${nom}`;

console.log(auteur2);

// node 7-lib.js

const formation = {
    debut : "1er janvier 2020",
    fin : "31 décembre 2020",
    domaine : "React"
}
// écrire phrase suivante :
// ma formation commence le 1er janvier 2020 sur React

const phrase = `ma formation commence le ${formation.debut} sur ${formation.domaine}`;

console.log(phrase) ;

//node 7-lib.js

// écrire la phrase suivante dans le console
// je suis une formation sur React qui finit le 31 décembre 2020

const phrase2 = `je suis une formation sur ${formation.domaine} qui finit le ${formation.fin}`;

console.log(phrase2);

//node 7-lib.js

// variable = stocker 1 ou plusieurs valeurs 

// fonction = variable dans laquelle stocker 1 ou plusieurs instructions

function bonjour2(){
    const a = 2 ;
    const b = 3 ;
    console.log(a + b);
}

// je stocke dans la variable bonjour 3 instructions 

bonjour2();

// node 7-lib.js

const salutation = function(){
    console.log("Decouverte Javascript !!!!!!!");
}

salutation();

//node 7-lib.js

const finMatinee = {
    heure : "12h30" , // propriété 
    action : function(){ // méthode 
        console.log("le temps d'aller déjeuner !");
    }
}

finMatinee.action();

//node 7-lib.js