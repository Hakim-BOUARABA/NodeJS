// jour3/02-correction.js
// arrêter le shell Ctrl + C puis O puis Enter
// cls => nettoyer mon shell


// cas pratique créer un nouveau fichier js 
// const resultat = [1,2,3,5];

const resultat = [1,2,3,5]; 

// ajouter un nouveau élément à la fin du tableau : la chaine "hello"

resultat.push("hello") ;

/* ajouter un nouveau élément à la fin du tableau 
    {
        _id : 12345 ,
        title : "article",
         contenu : "nouvel article"
    } */
    // aucun problème pour faire des sauts de ligne dans les parenthèses 
resultat.push(
    {
        _id : 12345 ,
        title : "article",
        contenu : "nouvel article"
    }
);

//   modifier le 3ème élément du tableau remplacer par "troisième"

resultat[3-1] = "troisième" ;

//   modifier le 1er élément du tableau remplacer par "first"

resultat[1-1] = "first";
//    supprimer le dernier élément du tableau => splice()
// resultat.length => le nombre d'élément dans mon tableau
resultat.splice(resultat.length - 1, 1);

/*    ajouter un nouvel élément au tableau ""
    {
        _id : 12345 ,
        title : "nouveau"
    } */
resultat.push({
    _id : 12345 ,
    title : "nouveau"
});
/*afficher le tableau dans la console 
*/

console.log(resultat);

// dans le shell nodemon 02-correction.js