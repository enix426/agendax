import { appelAfficheEvenement } from "../controlleur/afficheEvenement";
import {afficheGrille} from "../controlleur/afficheGrille";
import {ajoutEvenement} from "../controlleur/ajoutEvenement";
import {afficheDansCase} from "../controlleur/afficheDansCase";

console.log("je suis dans le main");



let tabDate = [];

afficheGrille(tabDate);

console.log(afficheGrille);


appelAfficheEvenement(function(donneesQuiAEteDonnerAAppelSucces){
        //ici entre les 2 ya quoi car ya un appelAfficheEvenement(appelSucces)
        //et quand tu as finis de rouler affiche evenement roule afficheDansCase
        // avec les 2 parametre 
    afficheDansCase(donneesQuiAEteDonnerAAppelSucces,tabDate);
    
});


ajoutEvenement();


