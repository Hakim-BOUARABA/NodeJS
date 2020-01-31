// jour3/05-exo.js

//créer la variable  // colllection
// arrêt du shell Ctrl + C
// nodemon 05-exo.js
const bdd = [
    {
        _id : 1 ,
        titre : "article 1",
        contenu : "description",
        prix : 20
    },
    {
        _id : 2 ,
        titre : "article 2",
        contenu : "description 2",
        prix : 203
    }
];

// ajouter deux nouveaux produits dans la collection bdd 
const nouveauProduit1 = {
    _id : 3 ,
    titre : "produit 3",
    contenu : "description du produit 3",
    prix : 22
};

const nouveauProduit2 = {
    _id : 4 ,
    titre : "produit 4",
    contenu : "description du produit 4",
    prix : 25
};

bdd.push(nouveauProduit1);
bdd.push(nouveauProduit2);
console.log(bdd);

// modifier le prix du produit qui a l' _id 2 // _id => MongoDB 

// rechercher le produit qui a l'_id 2
const produitRecherche = bdd.find(function(item){
    return item._id === 2;
});

// récupérer l'index :
const indexProduitRecherche = bdd.indexOf(produitRecherche);

// modification 
bdd[indexProduitRecherche].prix = 34;

console.log(bdd);

// modifier le titre du produit qui a l'_id 1

const produitRecherche1 = bdd.find(function(item){
    return item._id === 1;
});

// récupérer l'index :
const indexProduitRecherche1 = bdd.indexOf(produitRecherche1);

// modification 
bdd[indexProduitRecherche1].titre = "titre modifié";

console.log(bdd);

// supprimer le dernier produit de la collection 
const nbElementBdd = bdd.length;

bdd.splice(nbElementBdd - 1 , 1);

// afficher la collection

console.log(bdd);


