// 6-global.js
// importer la variable

const {nombre , liste } = require("./2-node")

console.log(nombre);
console.log(liste);

// lorsque l'on crée des variables et qu'on les exécute dans node 
// variable sont locales 
// chaque fichier est INDEPENDANT

// pour pouvoir accéder à la variable nombre qui est stockées dans le fichier
// 2-node.js
// je vais devoir explicitement dire au code => je veux exporter cette variable

// 1ère je vais aller dans le fichier 2-node.js
