<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/css.css">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
<title>Agendax</title>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700">
<link rel="stylesheet" href="assets/css/sticky-dark-top-nav.css">
<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
<div>
        <form id="eventForm">
            
            <br><input type="text" id="titre" type="input" name="titre" value="titre">
            <br><input type="text" id="date" type="input" name="date">
            <br><input type="text" id="description" type="input" name="description" value="description">
            <br><input type="text" id="dateD" type="input" name="startdate" value="">
                <select id="heureDebut"></select>
                <select id="minuteDebut"></select>
            <br><input type="text" id="dateF" type="input" name="enddate" value="">
                <select id="heureFin"></select></select>
                <select id="minuteFin"></select>
        </form>
        <button id="btnAjoutEvent">Ajouter Événement</button>
        <button id="btnTestHeur">Ajouter Événement</button>
</div>


<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="module" src="script/main.js"></script>


</body>
</html>