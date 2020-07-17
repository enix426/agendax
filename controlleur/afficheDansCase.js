export function afficheDansCase(serveurDate, idCalendrier) {

    //eTrDate = document.getElementById(dateDuServeur.date);
    //console.log(eTrDate);


    serveurDate.forEach(dateDuServeur => {


        let index = idCalendrier.indexOf(dateDuServeur.date)



        if (index != -1) {

            let space = $(`#date-${dateDuServeur.date}`);
            space.css('background', 'green')

            //trouver le ul
            // let listEvenement = $("#date-" + dateDuServeur.date + " ul");
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
        }


    });


}