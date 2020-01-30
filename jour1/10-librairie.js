
const auteur = "Victor Hugo" ;
// dans auteur => stocker une chaine de caractère = type string

// en plus de stocker la valeur "Victor Hugo" dans la variable
// en + Javascript avec ajouter des propriétés à notre variable

//console.log(auteur.length);

const debut = auteur.substr(1,1);

//console.log(debut);
// node 10-librairie.js

const jourSemaine = ["lundi", "mardi" , "mercredi"];
// variable jourSemaine est de type array 

const nbElementVariable = jourSemaine.length ;

//console.log(nbElementVariable);
// node 10-librairie.js



function nbcar(texte){
    console.log(texte.length);
}

module.exports.nbcar = nbcar;

//nbcar("bonjour les amis comment allez vous ??");

// node 10-librairie.js