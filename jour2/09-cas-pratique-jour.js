// https://www.grafikart.fr/tutoriels/express-798

// créer un nouveau fichier 
// utiliser le module express pour créer un serveur 
// ce serveur aura les comportements suivants

/*
si on l'appelle avec la méthode GET et l'url http://localhost:4300

retourner un tableau 
[
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
];


si on l'appelle avec la méthode GET et l'url http://localhost:4300/matiere/1
{id : 1 , nom : "informatique"}

si on l'appelle avec la méthode GET et l'url http://localhost:4300/matiere/2
{id : 2 , nom : "management"}

si l'appeler avec 
    la méthode POST et 
    l'url http://localhost:4300/add + 
    le json {"id" : 4 , "nom" : "autre matière"}

il va vous répondre 

retourner un tableau 
[
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
    {"id" : 4 , "nom" : "autre matière"}
];


si l'appeler avec 
    la méthode POST et 
    l'url http://localhost:4300/new + 
    le json {"id" : 5 , "categorie" : ["info1, "info2]}

il va vous répondre 

retourner un tableau 
[
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
    {"id" : 4 , "nom" : "autre matière"},
    {"id" : 5 , "categorie" : ["info1, "info2]}
]; */