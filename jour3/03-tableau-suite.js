// jour3/03-tableau-suite.js

// recherche dans un tableau
const resultat = [1,2,3,4] ;

// modifier l'élément qui contient la valeur 2

// avant de modifier, d'abord, il faut le trouver dans le tableau
// find()
// 1 seul argument => fonction 

// resultat.find(function(){});

const indexDeux = resultat.find(function(item){
    return item === 1 ;
});

console.log(indexDeux); // retourner si l'élément est bien présent dans le tableau

// nodemon 03-tableau-suite.js


// l'index dans le tableau
const index = resultat.indexOf("hello"); // si present retourne son index +1 et sinon -1
console.log(index);

// tableau qui contient des objets => collection

const t = [
    { id : 1 },
    { id : 2 },
    { id : 3 },
    { id : 10 }
];

// est que j'ai un élément dans ma variable t qui a l'id 10

 const resultats = t.find(function(item){ // el => {id : 1} , puis { id : 2} ... { id : 10 }
    return item.id === 10 ;
});  // resultat => si c'est vrai  { id : 10 } si c'est faux undefined

console.log(resultats); /**/

//  vérification 2 == 2 => true 
//  vérification 2 == "2" => true  => vérifier la valeur
//  vérification 2 === "2" => false vérifier la valeur ET le type 

// si l'élément est bien présent ALORS je peux récupérer sa position

const position = t.indexOf(resultats) ;

console.log(position);

t[position] = {
    id: 10,
    titre : "nouvel article",
    contenu : "article 1"
}

console.log(t);



// en javscript nous allons manipuler deux grands types de tableau

// tableau simple = 
// const a = [ 1 , 2 , 3] ;

// ajouter un élément à un tableau simple 
// a.push("hello")
// supprimer un élément d'un tableau simple
// a.splice(2,1); 
// modifier un élément
// a[index] = "modification"

// tableau complexe = collection 
/* const b = [
    {_id: 1},
    {_id: 2},
    {_id: 3}
] 
// ajouter un élément à un tableau complexe
b.push(
    {
        _id : 4 
    }
);
// supprimer un élément d'un tableau complexe { _id : 2}

*/
const b = [
    {_id: 1},
    {_id: 2},
    {_id: 3}
] ;
// rechercher dans le tableau b

const r = b.find(function(item){
    return item._id === 2
}); // r contient la position dans la RAM de { _id : 2}=> passage par référence 

const indexElement = b.indexOf(r);

b.splice(indexElement , 1);

console.log(b)