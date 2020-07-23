export function afficheDansCase(serveurDate, idCalendrier) {
    
    console.log({serveurDate, idCalendrier});
    //eTrDate = document.getElementById(dateDuServeur.date);
    //console.log(eTrDate);


    serveurDate.forEach((dateDuServeur, index) => {

        let indexDansCalendrier = idCalendrier.indexOf(dateDuServeur.date)
        if (indexDansCalendrier != -1) {

            let journee = $(`#date-${dateDuServeur.date}`);
            journee.css('background', 'green') // TODO: categorie

            /*
             * Mettre les evenements dans calendrier 
             */
            let listEvenement = document.querySelector("#date-" + dateDuServeur.date + " ul");
            let eText = document.createTextNode(dateDuServeur.titre);
            let eLi = document.createElement("li");
            if (listEvenement == null) {
                let eUl = document.createElement("ul");
                eUl.appendChild(eLi).appendChild(eText);
                journee.append(eUl);
            } else {
                listEvenement.appendChild(eLi).appendChild(eText);
            }

            // trouve le tbody pour afficher les evenement
            let tableEvenement = document.querySelector("#tableEvenement" + " tbody");
            // affiche les valeurs de chaque case qu'il y a dans la base de donner
            let eTrEvenement = document.createElement("tr")
            tableEvenement.appendChild(eTrEvenement);

            // cible la ligne exacte et la cellule exacte pour ensuite ajouter la valeur de la cellule dans le eTdEvenement
            for (let i = 0; i < Object.keys(dateDuServeur).length + 2; i++) {


                let eTdEvenement = document.createElement("td");
                let ePEvenement = document.createElement("p");
                if (i < Object.keys(dateDuServeur).length) {
                    eTrEvenement.appendChild(eTdEvenement).innerHTML = Object.values(dateDuServeur)[i];
                }
                // ajout l'icone de la poubelle supprimer
                if (i == Object.keys(dateDuServeur).length + 1) {
                    let eIcone = document.createElement("i");
                    eTrEvenement.appendChild(ePEvenement).appendChild(eIcone);
                    eTrEvenement.appendChild(ePEvenement).setAttribute("class", "fas fa-trash");
                    ePEvenement.addEventListener("click", function () {
                        console.log(Object.values(dateDuServeur)[0]);
                        let id = Object.values(dateDuServeur)[0];
                        suprimerEvenement(id);
                    })

                }
                
                // ajout l'icone papier crayon modifier
                if (i == Object.keys(dateDuServeur).length) {
                    // ajouter le bouton au html
                    let eIcone = document.createElement("i");
                    eTrEvenement.appendChild(ePEvenement).appendChild(eIcone);
                    eTrEvenement.appendChild(ePEvenement).setAttribute("class", "far fa-edit");

                    // bind le click au bouton edit
                    ePEvenement.addEventListener("click", function () {
                        console.log(Object.values(serveurDate[index])[0]);
                        let id = Object.values(serveurDate[index])[0];
                        RecupererId(id)
                        
                        document.getElementById("myModal").style.visibility = "visible";

                        // Ouvrir un modal pour modifier l'evement
                    })
                }
            }
            console.log(Object.values(serveurDate[index])[0]);
        }
    });


    // fonction suprimer evenement 
    function suprimerEvenement(id) {
        console.log("suprimerEvenement", id);
        let ajax = new XMLHttpRequest();
        let method = "DELETE";
        let url = "model/suprimerEvenement.php";
        let asynchronous = true;

        ajax.open(method, url, asynchronous);

        // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
        ajax.setRequestHeader("Content-Type", "application/json")

        let data = {
            id: id

        }
        ajax.send(JSON.stringify(data));

        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                console.log("je suis evenement suprimer");

            }
        }

    }
    // fonction recupere id evenement 
    function RecupererId(id) {
        console.log("RecupererId", id);
        let ajax = new XMLHttpRequest();
        let method = "GET";
        let url = "model/RecupererId.php";
        let asynchronous = true;

        ajax.open(method, url, asynchronous);

        // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
        ajax.setRequestHeader("Content-Type", "application/json")

        let data = {
            id: id

        }
        ajax.send(JSON.stringify(data));

        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                console.log("je suis evenement recupereID function");

            }
        }

    }


    function modifierEvenement(id, date, titre, description, stardt, enddt) {
        let ajax = new XMLHttpRequest();
        let method = "PUT";
        let url = "model/modifierEvenement.php";
        let asynchronous = true;

        ajax.open(method, url, asynchronous);

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

        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                console.log("je suis evenement modifier");

            }
        }

    }
}