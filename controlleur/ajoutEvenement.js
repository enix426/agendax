export function ajoutEvenement(){
    
//recuperation des champ input 
    // Ajout d'événement
    $('document').ready(function(){
        $("#btnAjoutEvent").click(evt => {
          
          let heureDebut = $("#heureDebut option:selected").val();
          let minuteDebut = $("#minuteDebut option:selected").val();
          let heureFin = $("#heureFin option:selected").val();
          let minuteFin = $("#minuteFin option:selected").val(); 
  
          let titre = $("input[name=titre]").val();
          let date = $("input[name=date]").val();
          let description = $("input[name=description]").val();
          let stardt = date + " " + heureDebut+":"+minuteDebut;
          let enddt = date + " " + heureFin+":"+minuteFin;
          
          
          console.log("je suis ici ",date, titre,description,stardt,enddt);
          console.log("test pour stardt ",date + " " + heureDebut+":"+minuteDebut);
          
          ajoutDonnee(date,titre,description,stardt,enddt);
          
        });
    });
  
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
            console.log("je suis evenement ajouté");
  
        }
    }
  
  }
}

export function genererDropdownHeures() {
  //dropdown avec select pour les heur
  let heureDebut = document.getElementById("heureDebut");
  let heureFin = document.getElementById("heureFin");

  for(let i =0; i<=23; i++){
    let optionHeureDebut = document.createElement("option");
    let optionHeureFin = document.createElement("option"); 
    heureDebut.appendChild(optionHeureDebut).innerHTML = i+"H";
    heureDebut.setAttribute("value",i);
    heureFin.appendChild(optionHeureFin).innerHTML = i+"H";
    heureFin.setAttribute("value",i);
  }

  //dropdown avec select pour les minutes
  let minuteDebut = document.getElementById("minuteDebut");
  let minuteFin = document.getElementById("minuteFin");

  for(let i =0; i<=59; i++){
    let optionMinuteDebut = document.createElement("option");
    let optionMinuteFin = document.createElement("option");
    minuteDebut.appendChild(optionMinuteDebut).innerHTML = i+"Min";
    optionMinuteDebut.setAttribute("value",i);
    minuteFin.appendChild(optionMinuteFin).innerHTML = i+"Min";
    optionMinuteFin.setAttribute("value",i);
  }
}