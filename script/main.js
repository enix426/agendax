import { jour, moisEnChiffre, annee } from "../controlleur/utiliter";
import { appelAfficheEvenement } from "../controlleur/afficheEvenement";
import { afficheGrille } from "../controlleur/afficheGrille";
import { afficheGrilleSemaine } from "../controlleur/afficheGrilleSemaine"
import { ajoutEvenement } from "../controlleur/ajoutEvenement";
import { afficheDansCase } from "../controlleur/afficheDansCase";

console.log("je suis dans le main");

let mois = localStorage.getItem('compteurMois')

if (mois == null) {
    mois = moisEnChiffre();
    localStorage.setItem('compteurMois', mois);
} else {
    mois = +mois;
}

let tabDate = [];
let serveurDate = [];

if(localStorage.getItem("btnMois") == 1){
    afficheGrille(tabDate, serveurDate, jour(),mois,annee());
} else {
    afficheGrilleSemaine(tabDate, serveurDate,mois,annee());
}


appelAfficheEvenement(function (donneesQuiAEteDonnerAAppelSucces) {
    //ici entre les 2 ya quoi car ya un appelAfficheEvenement(appelSucces)
    //et quand tu as finis de rouler affiche evenement roule afficheDansCase
    // avec les 2 parametre 
    afficheDansCase(donneesQuiAEteDonnerAAppelSucces, tabDate);
    // serveurDate.push(donneesQuiAEteDonnerAAppelSucces)    
    
    donneesQuiAEteDonnerAAppelSucces.forEach(date => serveurDate.push(date))
});

ajoutEvenement();

let btnMois = document.getElementById('afficher-mois');
let btnSemaine = document.getElementById('afficher-semaine');

btnMois.addEventListener('click', () => {
    localStorage.setItem("btnMois",1);
    localStorage.setItem("btnSemaine",0);

    document.getElementById('separation').innerHTML = ""
    document.getElementById('affichageDate').innerHTML = ""
    afficheGrille(tabDate, serveurDate, jour(),+localStorage.getItem('compteurMois'),annee());
})

btnSemaine.addEventListener('click', () => {
    localStorage.setItem("btnSemaine",1);
    localStorage.setItem("btnMois",0);
    
    document.getElementById('separation').innerHTML = ""
    document.getElementById('affichageDate').innerHTML = ""
    afficheGrilleSemaine(tabDate, serveurDate,+localStorage.getItem('compteurMois'),annee());
})