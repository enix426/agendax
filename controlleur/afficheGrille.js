export function afficheGrille(tabDate) {
    console.log("je suis dans grille");

    let body = document.querySelector("body");
    let h1 = document.createElement("h1");

    function jour() {
        let jour = new Date();

        return jour.getDate();
    }


    function mois() {
        let j = new Date();
        let mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return mois[j.getMonth()];
    }

    function moisEnChiffre() {
        let d = new Date();
        let n = d.getMonth();
        return n + 1;
    }

    function annee() {
        let annee = new Date();
        return annee.getFullYear();
    }

    let getDaysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    let moisNumber = getDaysInMonth(moisEnChiffre(), annee());


    body.appendChild(h1).innerHTML = jour() + " " + mois() + " " + annee();

    let table = document.createElement("table");


    body.appendChild(table);
    let dateSelectionner;
    let jourDuMois = 1;
    // creation grille de la date

    for (let i = 0; i < 5; i++) {
        let eTr = document.createElement("tr");

        table.appendChild(eTr);
        for (let j = 0; j < 7; j++) {
            let eTd = document.createElement("td");

            
            if (jourDuMois < moisNumber + 1) {

                eTr.appendChild(eTd).innerHTML = jourDuMois;
                eTd.setAttribute("id", "date-" + annee() + "-" + moisEnChiffre().toString().padStart(2, 0) + "-" + jourDuMois.toString().padStart(2, 0));
               // ajour des valeur dans le form ajout evenement quand click
                eTd.addEventListener("click", function (evt) {
                    
                    dateSelectionner = evt.target.id;
                    console.log(dateSelectionner.substr(5));
                    
                    document.getElementById("date").innerHTML = dateSelectionner;
                    document.getElementById("date").setAttribute("value", dateSelectionner.substr(5))

                    document.getElementById("dateD").innerHTML = dateSelectionner;
                    document.getElementById("dateD").setAttribute("value", dateSelectionner.substr(5))
                    
                    document.getElementById("dateF").innerHTML = dateSelectionner;
                    document.getElementById("dateF").setAttribute("value", dateSelectionner.substr(5))

                    
                })
                tabDate.push(annee() + "-" + moisEnChiffre().toString().padStart(2, 0) + "-" + jourDuMois.toString().padStart(2, 0));

                jourDuMois++;

            }

        }
        //console.log("je suis exe de tabDate ",tabDate)
    }
}