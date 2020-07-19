<?php


function connectDB()
{
    $c = mysqli_connect("localhost","root","","agendax");
    
    if(!$c)
        trigger_error("Erreur de connexion :" . msqli_connect_error());
    
    //mettre l'encodage utf-8 dans toutes nos requêtes
    mysqli_query($c, "SET NAMES 'utf8'");
    
    return $c;
}

$connexion = connectDB();

//exemple typique de fonction du modèle
function evenement()
{
    global $connexion;
    
    $requete = "SELECT * FROM evenement";
    $resultat = mysqli_query($connexion, $requete);
    
    return $resultat;
}

/* INSERT INTO evenement (date, titre, description,stardt,enddt) VALUES ('572020', 'testjour5','description yen a pas', '2020-06-20 10:00:00', '2020-06-20 11:00:00') */
function ajoutEvenement($date, $titre,$description, $stardt, $enddt)
{
    global $connexion;

    $requete = "INSERT INTO evenement (date, titre, description, stardt, enddt)
                VALUES ('$date', '$titre', '$description', '$stardt', '$enddt')";
    return mysqli_query($connexion, $requete);
}


/* Modifier evenement  id pas sur si doit etre la a verifier (id)*/
function modifierEvenement($id, $date, $titre,$description, $stardt, $enddt)
{
    global $connexion;

    $requete = "UPDATE evenement SET  `date` = $date,`titre` = $titre, `description` = $description,`stardt` = $stardt,`enddt` = $enddt
    WHERE id=$id";
    return mysqli_query($connexion, $requete);
}


/* suprimerEvenement  */
function suprimerEvenement($id)
{
    global $connexion;

    $requete = "DELETE FROM evenement WHERE id =". $id; 

    return mysqli_query($connexion, $requete);
}



/* RecupereId  */
function RecupererId($id)
{
    global $connexion;

    $requete = "SELECT * FROM evenement WHERE id=" . $id;

    return mysqli_query($connexion, $requete);
}


















/* function insert(Array $input)
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
    } */
?>

