//jour3/01-tableaux.js

// se positionner dans le dossier qui contient 01-tableaux.js
// dans windows => dans la barre d'adresse cmd C:\Users\stagiaire\Desktop\node\jour3
// nodemon 01-tableaux.js

const tableauSimple = ["lundi","mardi","mercredi"] ;

// lorsque l'on créé une variable => la variable type 
// spécial pour js => ajouter des méthodes 

// savoir combien d'éléments sont dans le tableau

const nombre = tableauSimple.length ;
console.log(nombre);

//tableauSimple.push(); // méthode qui est livré lorsque l'on crée la variable
// .push() => méthode = fonction d'objet 
// .push(1) => 1 seul argument une valeur 
// .push("bonjour") => 1 seul argument une valeur 
// .push({id : 1 , name : "information"}) => 1 seul argument une valeur 

tableauSimple.push(1);

console.log(tableauSimple);

tableauSimple.push({id : 1 , name :"information"});

console.log(tableauSimple);

// attention !!!!!!!!!!!!!!!!!!
// la méthode push() ne fonctionne QUE si la variable est un tableau

//const voiture = { id : 1 , marque :"peugeot"} ;
//voiture.push(1);

// modifier les valeurs qui sont stockées dans le tableau

tableauSimple[0] = "hello";

console.log(tableauSimple);
// variante de ce que l'on vient de voir 
const id = 2 ;

tableauSimple[id - 1] = "autre information" ;
// 1 javascript va calculer id - 1 = 2 - 1 = 1
// tableauSimple[1] = "autre information" ;
// modifier la 2ème valeur stockée dans le tableau 
console.log(tableauSimple);

// modifier le dernier élément du tableau 

tableauSimple[tableauSimple.length - 1] = 2 ;
// 1 ??? combien tableauSimple.length = 5
// 5 - 1 = 4 
// modifier l'élément qui a l'index 4 => le dernier élément
console.log(tableauSimple);

// supprimer des items 
// supprimer le 2ème élément du tableau
// .splice() => 2 arguments 
// où => chiffre index 
// combien => chiffre à partir de 1

tableauSimple.splice(1,1);

console.log(tableauSimple);

// supprimer le dernier élément du tableau

tableauSimple.splice(tableauSimple.length -1 , 1);
//1 tableauSimple.length = 4
// 4 - 1 = 3
// tableauSimple.splice(3 , 1);

// avec notre variable tableauSimple => 

// CRUD = 
// CREATE tableauSimple.push("valeur")
// READ = tableauSimple[2]
// UPDATE = tableauSimple[2] = "modification"
// DELETE = tableauSimple.splice(2, 1);
