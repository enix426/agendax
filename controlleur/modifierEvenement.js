export function remplirFormulaire(evt) {
    let eId = document.querySelector('#formModifierEvenement [name=id]')
    let eTitre = document.querySelector('#formModifierEvenement [name=titre]')
    let eDate = document.querySelector('#formModifierEvenement [name=date]')
    let eDescription = document.querySelector('#formModifierEvenement [name=description]')
    let eStartdate = document.querySelector('#formModifierEvenement [name=startdate]')
    let eEnddate = document.querySelector('#formModifierEvenement [name=enddate]')

    const {
        id,
        titre,
        date,
        description,
        stardt,
        enddt
    } = evt

    let heureDebut = +stardt.match(/\d{4}-\d\d-\d\d (\d\d):(\d\d)/)[1]
    let minuteDebut = +stardt.match(/\d{4}-\d\d-\d\d (\d\d):(\d\d)/)[2]
    let heureFin = +enddt.match(/\d{4}-\d\d-\d\d (\d\d):(\d\d)/)[1]
    let minuteFin = +enddt.match(/\d{4}-\d\d-\d\d (\d\d):(\d\d)/)[2]

    let eHeureDebut = $(`#heureDebutModifier option[value=${heureDebut}]`);
    let eMinuteDebut = $(`#minuteDebutModifier option[value=${minuteDebut}]`);
    let eHeureFin = $(`#heureFinModifier option[value=${heureFin}]`);
    let eMinuteFin = $(`#minuteFinModifier option[value=${minuteFin}]`);
    
    eId.value = id
    eTitre.value = titre
    eDate.value = date
    eDescription.value = description
    eStartdate.value = stardt.substring(0, 10)
    eEnddate.value = enddt.substring(0, 10)
    eHeureDebut.attr('selected', 'selected')
    eMinuteDebut.attr('selected', 'selected')
    eHeureFin.attr('selected', 'selected')
    eMinuteFin.attr('selected', 'selected')
}

export function soumettreFormulaire(serveurDate) {
    let eId = document.querySelector('#formModifierEvenement [name=id]')
    let eTitre = document.querySelector('#formModifierEvenement [name=titre]')
    let eDate = document.querySelector('#formModifierEvenement [name=date]')
    let eDescription = document.querySelector('#formModifierEvenement [name=description]')
    let eStartdate = document.querySelector('#formModifierEvenement [name=startdate]')
    let eEnddate = document.querySelector('#formModifierEvenement [name=enddate]')
    let heureDebut = $("#heureDebutModifier option:selected").val();
    let minuteDebut = $("#minuteDebutModifier option:selected").val();
    let heureFin = $("#heureFinModifier option:selected").val();
    let minuteFin = $("#minuteFinModifier option:selected").val();

    let evt = {
        id: eId.value, // ID de l'evenement
        titre: eTitre.value,
        date: eDate.value,
        description: eDescription.value,
        stardt: `${eStartdate.value.substring(0, 10)} ${heureDebut}:${minuteDebut}`,
        enddt: `${eEnddate.value.substring(0, 10)} ${heureFin}:${minuteFin}`
    }   

    function succes() {
        let event = serveurDate.find(e => e.id === evt.id)
        event.titre = evt.titre
        event.date = evt.date
        event.description = evt.description
        event.stardt = evt.stardt
        event.enddt = evt.enddt
        
        window.location.reload()
    }

    function error(e) {
        alert('Une erreur est survenue: ' + e)
    }

    soumettreModifier(evt, succes, error)
}

function soumettreModifier({ id, date, titre, description, stardt, enddt }, succes, error) {
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
        if(ajax.readyState === XMLHttpRequest.DONE) {
            if (status == 0 || this.status == 200) {
                console.log("je suis evenement modifier");
                return succes() 
            }
    
            error(this.status)
        }
    }

}