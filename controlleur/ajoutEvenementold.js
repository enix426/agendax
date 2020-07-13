export function ajoutDonnee(date,titre,description,stardt,enddt){
    let ajax = new XMLHttpRequest();
    let method = "POST";
    let url = "model/ajoutEvenement.php";
    let asynchronous = true;

    ajax.open(method,url,asynchronous);

    //recuperation des champ input 
    // Ajout d'événement
    $(() => {
    $("#btnAjoutEvent").click(evt => {
    stardt = document.getElementById("dateD").value;
    enddt = document.getElementById("dateF").value;
    console.log(stardt, enddt)
    });
});

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
            let data =JSON.parse(this.responseText);

        }
    }

}

/*
function insert(Array $input)
    {
        $statement = "
            INSERT INTO agxevent 
                (name, startdt, enddt)
            VALUES
                (:name, :startdt, :enddt);
        ";

        try {
            $statement = $this->db->prepare($statement);
            $statement->execute(array(
                'name' => $input['name'],
                'startdt'  => $input['startdt'],
                'enddt' => $input['enddt'],
            ));
            return $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }    
    }
*/
   