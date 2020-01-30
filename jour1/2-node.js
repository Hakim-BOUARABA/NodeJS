// 2-node.js

//Dans le dossier jour1
// créer le fichier 2-node.js

// ce fichier contient deux instructions
// créer une variable  nombre = 22
// afficher dans la console le nombre

// enfin, exécuter ce fichier dans le shell 

const nombre = 22 ;
console.log(nombre);
var liste = ["pomme","poire"];

// exporter une variable 
module.exports.nombre = nombre; 
module.exports.liste = liste;

// node .\2-node.js