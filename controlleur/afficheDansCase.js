export function afficheDansCase(serveurDate, idCalendrier) {

    serveurDate.forEach(dateDuServeur => {


        let index = idCalendrier.indexOf(dateDuServeur.date)

        if (index != -1) {
            console.log(dateDuServeur.id, " ", dateDuServeur.titre, " ", dateDuServeur.description, " ", dateDuServeur.date);
            $(`#${dateDuServeur.date}`).css('background', 'green');

            let eUl = document.createElement("ul");
            let eLi = document.createElement("li");
            eLi.setAttribute("class", "liTitre");

            let eText = document.createTextNode(dateDuServeur.titre);
            document.getElementById(dateDuServeur.date).appendChild(eUl).appendChild(eLi).appendChild(eText);

            //$(`#${dateDuServeur.date}`).append("<li class='liTitre'>"+dateDuServeur.titre+"</li>");
        }
    });

}