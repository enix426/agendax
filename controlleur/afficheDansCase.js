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
            
            // trouve le tbody
            let tableEvenement = document.querySelector("#tableEvenement" + " tbody");
             // affiche les valeurs de chaque case qu'il y a dans la base de donner
                let eTrEvenement = document.createElement("tr")
                tableEvenement.appendChild(eTrEvenement);
       // cible la ligne exate et la cellule exate pour ensuite ajouter la valeur de la cellule dans le eTdEvenement
                for(let i=0; i<Object.keys(serveurDate[evt]).length;i++){
                    
                    let eTdEvenement = document.createElement("td");
                    eTrEvenement.appendChild(eTdEvenement).innerHTML = Object.values(serveurDate[evt])[i];
                    
                 } 

                  
            
            
            

            console.log(Object.values(serveurDate[evt])[0]);
        }
        
    });
}