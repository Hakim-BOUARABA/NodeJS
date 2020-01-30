
// importer toutes les variables qui viennent du fichier 9-module.js
// stocker 
// require => NOdeJS qui la comprend 
//const lib = require("./9-module");

//console.log(lib);
//console.log(lib.lib.nom);

// shell node 9-main.js



const {lib , formation , date} =  require("./9-module");

console.log(lib.nom);

// shell node 9-main.js

//const {formation} = require("./9-module");

console.log(formation.sujet);

// shell node 9-main.js

//const {date} = require("./9-module");

console.log(date);

// shell node 9-main.js => undefined


const objet =  require("./9-module");

console.log(objet); // contient l'intégralité de tous les exports réalisées
// dans le fichier 9-module.js
// afin d'éviter avec à écrire objet.formation.sujet
// nous allons utiliser la destructuration 
// aller dans la section 2 du jour 1 => 4ème partie => cas pratique 