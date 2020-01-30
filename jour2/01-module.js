// jour2/01-module.js

const calculAire = function (largeur, hauteur){

    // vérifier mes variables avant d'effecter le return

    if(typeof largeur != "number"){
        // isNaN(largeur)
        return "largeur incorrecte"; // stop exécution du code 
    }

    if(typeof hauteur != "number"){
        return "hauteur incorrecte"; // stop exécution du code 
    }   

    return `le rectange a une largeur de ${largeur} et une hauteur de ${hauteur} et il a une aire de ${largeur * hauteur }`;

}
// test 
//const resultat = calculAire(2, 3);
//console.log(resultat);
//console.log(calculAire(2, 3));
// node 01-module.js

module.exports.calculAire = calculAire ;