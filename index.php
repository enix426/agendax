<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/css.css">
<title>Page Title</title>
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