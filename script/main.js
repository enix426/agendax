import { appelAfficheEvenement } from "../controlleur/afficheEvenement";
import {afficheGrille} from "../controlleur/afficheGrille";
import {ajoutEvenement} from "../controlleur/ajoutEvenement";
import {afficheDansCase} from "../controlleur/afficheDansCase";

console.log("je suis dans le main");


afficheGrille();
appelAfficheEvenement();
appelAfficheEvenement(afficheDansCase);
ajoutEvenement();