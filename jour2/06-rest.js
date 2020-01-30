// jour2/06-rest.js

// Node.Js va permettre de créer des serveurs == Back office 

// API RESTFUll  === SERVICE
// Application Program Interface 
// REST : REpresentational State Transfer

// lorsque vous appeler un site internet : https://lemonde.fr
// vous faîtes une requête http de type GET


// le serveur reçoit la demande et lance le traitement 

// lorsqu'il a fini de traiter la demande 
// return 2 choses
// => code 200 / 304 / 404 / 500
// réponse html / javascript / image / fichier css ....


//<form action="ajouter-newsletter.php" method="post">
//</form>

// npm i express
// pour MacOS sudo npm i express

// import de la librairie express 
const express = require("express");

const app = express(); // créer notre serveur

app.get("url", callback); // READ
app.put("url", callback); // UPDATE = mis à jour
app.post("url", callback); // CREATE = ajouter  
app.delete("url", callback); // Delete = supprimer 

app.listen(5000);
