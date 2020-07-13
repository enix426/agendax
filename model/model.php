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

