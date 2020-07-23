<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="css/css.css">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Agendax</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700">
  <script src="https://kit.fontawesome.com/c9135ee11c.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/v4-shims.css">

</head>

<body>
  <!-- SECTION AFFICHE AGENDA + AJOUTER EVENEMENTS -->

  <div id="main">


    <!-- <button id="changeHeure" class="fas fa-clock" type="button" ></button> -->

    <h1>Agendax</h1>

    <div id="menu">
      <div><button class="openbtn" onclick="openNav()">☰ Modifier Evenement</button></div>
      <div><button class="openbtn1" onclick="openNav1()">☰ Ajouter Evenement.</button></div>
      <div><button id="afficher-mois" class="openbtn2">☰ Afficher mois.</button></div>
      <div><button id="afficher-semaine" class="openbtn3">☰ Afficher semaine.</button></div>
    </div>

    <div id="aligner">
      <i id="prev" class="fa fa-chevron-left" aria-hidden="true"></i>
      <!-- AFFICHAGE CALENDRIER -->
      <div id="affichageDate"></div>
      <i id="next" class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>

    <div id="separation"></div>

    <script type="module" src="script/main.js"></script>

    <!-- LA SIDE BOARD AVEC FORUMULAIRE -->
    <div id="mySidebar1" class="sidebar">
      <a href="javascript:void(0)" class="closebtn1" onclick="closeNav1()">X</a>
      <h3>Ajouter Evenements</h3>
      <div id="agenda">
        <form id="eventForm">
          <h5>Titre</h5>
          <input type="text" id="titre" type="input" name="titre" value="titre">
          <h5>Date</h5>
          <input type="text" id="date" type="input" name="date">
          <h5>Description</h5>
          <input type="text" id="description" type="input" name="description" value="description">
          <h5>Date Début</h5>
          <input type="text" id="dateD" type="input" name="startdate" value="">
          <select id="heureDebut"></select>
          <select id="minuteDebut"></select>
          <h5>Date Fin</h5>
          <input type="text" id="dateF" type="input" name="enddate" value="">
          <select id="heureFin"></select></select>
          <select id="minuteFin"></select>

        </form>
        <button id="btnAjoutEvent">Ajouter Événement</button>
      </div>
    </div>
  </div>

  <!-- SECTION SIDE BAR MODIFICATION + MODIFICATION -->
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">X</a>
    <h3>Modification des evenements</h3>
    <section>

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
        <tbody id=modificationEvent>
        </tbody>
      </table>
      <!-- /* MEMO BOUTON MODIFIER AFFICHE RIEN PARCE QUE ICI ON EST A +2 SUR LE MOIS DONC SEPTEMBRE! !*/ -->
      <div id="modifierEvenement">



        <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span id="close-modal" class="close">&times;</span>

            <form id="formModifierEvenement">
              <h5>Titre</h5>
              <input type="text" id="titre" type="input" name="titre" value="titre">
              <h5>Date</h5>
              <input type="text" id="date" type="input" name="date">
              <h5>Description</h5>
              <input type="text" id="description" type="input" name="description" value="description">
              <h5>Date Début</h5>
              <input type="text" sid="dateD" type="input" name="startdate" value="">
              <select id="heureDebut"></select>
              <select id="minuteDebut"></select>
              <h5>Date Fin</h5>
              <input type="text" id="dateF" type="input" name="enddate" value="">
              <select id="heureFin"></select></select>
              <select id="minuteFin"></select>
            </form>

            <button id="btnModifierEvenement">Modifier Événement</button>

          </div>
        </div>

      </div>
    </section>
  </div>








  <script>
    function openNav1() {
      document.getElementById("mySidebar1").style.width = "400px";
      document.getElementById("main").style.marginLeft = "400px";
    }

    function closeNav1() {
      document.getElementById("mySidebar1").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }

    function openNav() {
      document.getElementById("mySidebar").style.width = "850px";
      document.getElementById("main").style.marginLeft = "850px";
    }

    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  </script>
  <script>
    // recuperer modal
    var modal = document.getElementById("myModal");

    // recuperer bouton id
    var btn1 = document.getElementById("myBtn1");

    // recupere le span pour close
    var span = document.getElementsByClassName("close")[0];

    // quand user click rouvre modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    document.getElementById('close-modal').onclick = function() {
      modal.style.display = "none";
    }

    // quand user click rouvre modal
    btn1.onclick = function() {
      modal.style.display = "block";
    }

    // quand user click <span> (x), ferme le modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // quand user click out side de box sa ferme
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  </script>

</body>

</html>