// jour2/04-librairie.js

// pour utiliser une librairie que l'on vient de télécharger dans le dossier node_modules

const _ = require("underscore");

// faire mélanger les données d'un tableau

const tableauDeBase = ["niveau 1", "niveau 2", "niveau 3"];

const tableauMelange = _.shuffle(tableauDeBase);

console.log(tableauMelange);

// node 04-librairie.js
// node 04-librairie.js
// node 04-librairie.js


//https://formation.webdevpro.net/nodejs