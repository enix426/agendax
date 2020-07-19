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
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"/>
    <script src="https://kit.fontawesome.com/c9135ee11c.js" crossorigin="anonymous"></script>
</head>
<body>

<nav class="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button">
        <div class="container">
            <div><a class="navbar-brand" href="#"><span><img src="assets/img/logo.png">Agendax</span> </a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav nav-right">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="index.html" style="color: rgb(255,255,255);">home </a></li>
                    <li class="nav-item" role="presentation"></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="about.html" style="color: rgb(255,255,255);">about </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="faq.html" style="color: rgb(255,255,255);">faq </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="contact.html" style="color: rgb(255,255,255);">contact </a></li>
                </ul>
                <p class="ml-auto navbar-text actions"><a class="login" href="login.html">Log In</a> <a class="btn btn-light action-button" role="button" href="signup.html" style="color: rgb(255,255,255);">Sign Up</a></p>
        </div>
        </div>
    </nav>
<section id="agenda">
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
</section>


<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<div id="separation"> 

    

    <table id="tableEvenement" class="display"> 
      <thead>
            <tr>
               <th>ID</th>
               <th>date</th>
               <th>Titre</th>
               <th>Description</th>
               <th>Stardt</th>
               <th>Enddt</th>
            </tr>
        </thead>  
        <tbody>
        </tbody>
      
    </table>



    
    

<script type="module" src="script/main.js"></script>
</div>

<div id="modifierEvenement">
        <form id="formModifierEvenement">
                <br><input type="text" id="titre" type="input" name="titre" value="titre">
                <br><input type="text" id="date" type="input" name="date">
                <br><input type="text" id="description" type="input" name="description" value="description">
                <br><input type="text" id="dateD" type="input" name="startdate" value="">
                    <select id="heureDebut"></select>
                    <select id="minuteDebut"></select>
                <br><input type="text" id="dateF" type="input" name="enddate" value="">
                    <select id="heureFin"></select></select>
                    <select id="minuteFin"></select>
                    <button id="btnModifierEvenement">Modifier Événement</button>
            </form>
    </div>
</body>
</html>