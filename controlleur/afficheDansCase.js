export function afficheDansCase(serveurDate, idCalendrier) {

    //eTrDate = document.getElementById(dateDuServeur.date);
    //console.log(eTrDate);

    
    serveurDate.forEach((dateDuServeur,evt) => {
        
        let index = idCalendrier.indexOf(dateDuServeur.date)
        if (index != -1) {

            let space = $(`#date-${dateDuServeur.date}`);
            space.css('background', 'green')

            //trouver le ul
            // 
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

            let tableEvenement = document.querySelector("#tableEvenement" + " tbody");
         
            
            // voir le nombre de cellule par ligne
            
            
            //for(let i=0;i<serveurDate.length;i++)
           
                let eTrEvenement = document.createElement("tr")
                tableEvenement.appendChild(eTrEvenement);
                
                for(let i=0; i<Object.keys(serveurDate[evt]).length;i++){
                    
                    let eTdEvenement = document.createElement("td");
                    eTrEvenement.appendChild(eTdEvenement).innerHTML = i;
                    
                 } 

                  
            
            
            

            console.log(Object.keys(serveurDate[evt])[0].value);
        }
        
    });
}