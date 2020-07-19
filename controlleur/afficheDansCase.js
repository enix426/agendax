export function afficheDansCase(serveurDate, idCalendrier) {

    //eTrDate = document.getElementById(dateDuServeur.date);
    //console.log(eTrDate);

    
    serveurDate.forEach((dateDuServeur,evt) => {
        
        let index = idCalendrier.indexOf(dateDuServeur.date)
        if (index != -1) {

            let space = $(`#date-${dateDuServeur.date}`);
            space.css('background', 'green')

            //trouver le ul
            let listEvenement = document.querySelector("#date-" + dateDuServeur.date + " ul");
            let eText = document.createTextNode(dateDuServeur.titre);
            let eLi = document.createElement("li");
            if (listEvenement == null) {
                let eUl = document.createElement("ul");
                eUl.appendChild(eLi).appendChild(eText);
                space.append(eUl);

            } else {
                listEvenement.appendChild(eLi).appendChild(eText);

            }
            
            // trouve le tbody pour afficher les evenement
            let tableEvenement = document.querySelector("#tableEvenement" + " tbody");
             // affiche les valeurs de chaque case qu'il y a dans la base de donner
                let eTrEvenement = document.createElement("tr")
                tableEvenement.appendChild(eTrEvenement);
       // cible la ligne exate et la cellule exate pour ensuite ajouter la valeur de la cellule dans le eTdEvenement
                for(let i=0; i<Object.keys(serveurDate[evt]).length + 2;i++){
                    
                    
                    let eTdEvenement = document.createElement("td");
                    if(i< Object.keys(serveurDate[evt]).length){
                    eTrEvenement.appendChild(eTdEvenement).innerHTML = Object.values(serveurDate[evt])[i];
                    }
                    // ajout l'icone de la poubelle supprimer
                    if(i == Object.keys(serveurDate[evt]).length){
                        let compte = evt - 1;
                        let eIcone = document.createElement("i");
                        eTrEvenement.appendChild(eTdEvenement).appendChild(eIcone);
                        eTrEvenement.appendChild(eTdEvenement).setAttribute("class","fas fa-trash");
                        eTdEvenement.addEventListener("click", function(){
                            console.log(Object.values(serveurDate[evt])[0]);
                            let id = Object.values(serveurDate[evt])[0];
                            suprimerEvenement(id);
                        })
                        
                    }
                    // ajout l'icone papier crayon modifier
                    if(i == Object.keys(serveurDate[evt]).length + 1){
                        let compte = evt - 2;
                        let eIcone = document.createElement("i");
                        eTrEvenement.appendChild(eTdEvenement).appendChild(eIcone);
                        eTrEvenement.appendChild(eTdEvenement).setAttribute("class","far fa-edit");
                        eTdEvenement.addEventListener("click", function(){
                            console.log(Object.values(serveurDate[evt])[0]);
                            let id = Object.values(serveurDate[evt])[0];
                            RecupererId(id)

                           document.getElementById("formModifierEvenement").style.visibility="visible";

                           
            
                            //modifierEvenement(id)
                            
                        })
                        
                        
                    }
                    
                 }
            console.log(Object.values(serveurDate[evt])[0]);
        }
        
    });


    // fonction suprimer evenement 
    function suprimerEvenement(id){
        console.log("suprimerEvenement",id);
        let ajax = new XMLHttpRequest();
        let method = "DELETE";
        let url = "model/suprimerEvenement.php";
        let asynchronous = true;
      
        ajax.open(method,url,asynchronous);
        
        // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
        ajax.setRequestHeader("Content-Type", "application/json")
      
        let data = {
            id: id
           
        }
        ajax.send(JSON.stringify(data));
        
        ajax.onreadystatechange = function()
        {
      
            if(this.readyState == 4 && this.status ==200){
                console.log("je suis evenement suprimer");
      
            }
        }
      
      }



       // fonction recupere id evenement 
    function RecupererId(id){
        console.log("RecupererId",id);
        let ajax = new XMLHttpRequest();
        let method = "GET";
        let url = "model/RecupererId.php";
        let asynchronous = true;
      
        ajax.open(method,url,asynchronous);
        
        // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
        ajax.setRequestHeader("Content-Type", "application/json")
      
        let data = {
            id: id
            
        }
        ajax.send(JSON.stringify(data));
        
        ajax.onreadystatechange = function()
        {
      
            if(this.readyState == 4 && this.status ==200){
                console.log("je suis evenement suprimer");
      
            }
        }
      
      }


      function modifierEvenement(id,date,titre,description,stardt,enddt){
        let ajax = new XMLHttpRequest();
        let method = "PUT";
        let url = "model/modifierEvenement.php";
        let asynchronous = true;
      
        ajax.open(method,url,asynchronous);
        
        // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
        ajax.setRequestHeader("Content-Type", "application/json")
      
        let data = {
            id: id,
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
                console.log("je suis evenement modifier");
      
            }
        }
      
      }
}