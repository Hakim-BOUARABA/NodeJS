// jour3/04-json.js

// lorsque vous communiquez avec un serveur => information structurée
// dans javascript, il y a les objets ressemblent énormément au json

// objet javascript

const voiture = {
    _id : 1 ,
    marque : "Peugeot" , // accepté de laisser une , pour dernier élément 
}

// JSON : JavaScript Object Notation = objet qui va envoyé / reçu sur le réseau 

const voiture2 = {
    "_id" : 1, // les propriétés du json doivent OBLIGATOIREMENT être entourée " "
    "marque" : "Peugeot"
}

const voiture3 = { // erreur => JSON incorrect 
    '_id' : 1, // les propriétés du json doivent OBLIGATOIREMENT être entourée " "
    'marque' : "Peugeot"
}

const voiture4 = { // erreur => JSON incorrect 
    "_id" : 1, // les propriétés du json doivent OBLIGATOIREMENT être entourée " "
    "marque" : "Peugeot" ,
}
