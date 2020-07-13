import { appelAfficheEvenement } from "../controlleur/afficheEvenement";
//import { ajoutDonnee } from "../controlleur/ajoutEvenement";

console.log("je suis dans le main");



let body = document.querySelector("body");
let h1 = document.createElement("h1");
//let dateCourante = document.createTextNode(getDate());

function jour()
{
    let jour = new Date();

    return jour.getDate();
}


function mois()
{
    let j = new Date();
    let mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return mois[j.getMonth()];
}

function moisEnChiffre() {
  let d = new Date();
  let n = d.getMonth();
  return n + 1;
}

function annee()
{
    let annee = new Date();
    return annee.getFullYear();
}

function x(){
console.log(jour());
console.log(mois());
console.log(annee());
}


let getDaysInMonth = function(month,year) {
 return new Date(year, month, 0).getDate();
};
let moisNumber = getDaysInMonth(moisEnChiffre(),annee());

console.log(moisNumber);
body.appendChild(h1).innerHTML = jour()+" "+mois()+" "+annee();

let table = document.createElement("table");
let idJour;
let idMois;
body.appendChild(table);
let jourDuMois =1;
// creation grille
for(let i=0;i<5;i++){
  let eTr = document.createElement("tr");

  table.appendChild(eTr);
    for(let j=0;j<7;j++){
      let eTd = document.createElement("td");
      if(jourDuMois < moisNumber + 1){

      eTr.appendChild(eTd).innerHTML = jourDuMois;
      eTd.setAttribute("id",annee()+"-"+moisEnChiffre().toString().padStart(2,0)+"-"+jourDuMois.toString().padStart(2,0));
      eTd.addEventListener("click",function(evt){

        console.log(jourDuMois);
        console.log(evt.target.id);
        //let div = document.createElement("div").setAttribute("popup");
      })
      jourDuMois++;
      }
    }
    //2020-06-20 10:00:00
    //2020-7-9
    console.log(annee()+"-"+"0"+moisEnChiffre()+"-"+jour())
}

//mofication de la date si inférieur a 10
//07-07-2020

//evt va dans afficheEvenement et affiche le data

// Definir la fonction "callBack"
function callBack(evt){  
  // log la reponse du serveur
  
  console.log(evt);
}


// Donner la fonction "callBack" a "appelAfficheEvenement"
appelAfficheEvenement(callBack);

function ajoutDonnee(date,titre,description,stardt,enddt){
  let ajax = new XMLHttpRequest();
  let method = "POST";
  let url = "model/ajoutEvenement.php";
  let asynchronous = true;

  ajax.open(method,url,asynchronous);
  
  // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
  ajax.setRequestHeader("Content-Type", "application/json")

  let data = {
      date: date,
      titre: titre,
      description: description,
      stardt: stardt,
      enddt: enddt
  }
  ajax.send(JSON.stringify(data));
  
  ajax.onreadystatechange = function()
  {

      if(this.readyState == 4 && this.status ==200){
          console.warn("je suis evenement ajouté");

      }
  }

}

    //recuperation des champ input 
    // Ajout d'événement
    $('document').ready(function(){
      $("#btnAjoutEvent").click(evt => {
        let titre = $("input[name=titre]").val();
        let description = $("input[name=description]").val();
        let stardt = $("input[name=startdate]").val();
        let enddt = $("input[name=enddate]").val();
console.log("je suis ici ", titre,description,stardt,enddt);
        ajoutDonnee(1372020, titre,description,stardt,enddt)
        
      });
  });


  

  





