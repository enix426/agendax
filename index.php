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
    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span id="close-modal" class="close">&times;</span>

        <form id="formModifierEvenement">
          <input type="hidden" id="id" type="input" name="id" value="id">
          <h5>Titre</h5>
          <input type="text" id="titre" type="input" name="titre" value="titre">
          <h5>Date</h5>
          <input type="text" id="date" type="input" name="date">
          <h5>Description</h5>
          <input type="text" id="description" type="input" name="description" value="description">
          <h5>Date Début</h5>
          <input type="text" sid="dateD" type="input" name="startdate" value="">
          <select id="heureDebutModifier">
            <option value="0">0H</option>
            <option value="1">1H</option>
            <option value="2">2H</option>
            <option value="3">3H</option>
            <option value="4">4H</option>
            <option value="5">5H</option>
            <option value="6">6H</option>
            <option value="7">7H</option>
            <option value="8">8H</option>
            <option value="9">9H</option>
            <option value="10">10H</option>
            <option value="11">11H</option>
            <option value="12">12H</option>
            <option value="13">13H</option>
            <option value="14">14H</option>
            <option value="15">15H</option>
            <option value="16">16H</option>
            <option value="17">17H</option>
            <option value="18">18H</option>
            <option value="19">19H</option>
            <option value="20">20H</option>
            <option value="21">21H</option>
            <option value="22">22H</option>
            <option value="23">23H</option>
          </select>
          <select id="minuteDebutModifier">
            <option value="0">0Min</option>
            <option value="1">1Min</option>
            <option value="2">2Min</option>
            <option value="3">3Min</option>
            <option value="4">4Min</option>
            <option value="5">5Min</option>
            <option value="6">6Min</option>
            <option value="7">7Min</option>
            <option value="8">8Min</option>
            <option value="9">9Min</option>
            <option value="10">10Min</option>
            <option value="11">11Min</option>
            <option value="12">12Min</option>
            <option value="13">13Min</option>
            <option value="14">14Min</option>
            <option value="15">15Min</option>
            <option value="16">16Min</option>
            <option value="17">17Min</option>
            <option value="18">18Min</option>
            <option value="19">19Min</option>
            <option value="20">20Min</option>
            <option value="21">21Min</option>
            <option value="22">22Min</option>
            <option value="23">23Min</option>
            <option value="24">24Min</option>
            <option value="25">25Min</option>
            <option value="26">26Min</option>
            <option value="27">27Min</option>
            <option value="28">28Min</option>
            <option value="29">29Min</option>
            <option value="30">30Min</option>
            <option value="31">31Min</option>
            <option value="32">32Min</option>
            <option value="33">33Min</option>
            <option value="34">34Min</option>
            <option value="35">35Min</option>
            <option value="36">36Min</option>
            <option value="37">37Min</option>
            <option value="38">38Min</option>
            <option value="39">39Min</option>
            <option value="40">40Min</option>
            <option value="41">41Min</option>
            <option value="42">42Min</option>
            <option value="43">43Min</option>
            <option value="44">44Min</option>
            <option value="45">45Min</option>
            <option value="46">46Min</option>
            <option value="47">47Min</option>
            <option value="48">48Min</option>
            <option value="49">49Min</option>
            <option value="50">50Min</option>
            <option value="51">51Min</option>
            <option value="52">52Min</option>
            <option value="53">53Min</option>
            <option value="54">54Min</option>
            <option value="55">55Min</option>
            <option value="56">56Min</option>
            <option value="57">57Min</option>
            <option value="58">58Min</option>
            <option value="59">59Min</option>
          </select>
          <h5>Date Fin</h5>
          <input type="text" id="dateF" type="input" name="enddate" value="">
          <select id="heureFinModifier">
            <option value="0">0H</option>
            <option value="1">1H</option>
            <option value="2">2H</option>
            <option value="3">3H</option>
            <option value="4">4H</option>
            <option value="5">5H</option>
            <option value="6">6H</option>
            <option value="7">7H</option>
            <option value="8">8H</option>
            <option value="9">9H</option>
            <option value="10">10H</option>
            <option value="11">11H</option>
            <option value="12">12H</option>
            <option value="13">13H</option>
            <option value="14">14H</option>
            <option value="15">15H</option>
            <option value="16">16H</option>
            <option value="17">17H</option>
            <option value="18">18H</option>
            <option value="19">19H</option>
            <option value="20">20H</option>
            <option value="21">21H</option>
            <option value="22">22H</option>
            <option value="23">23H</option>
          </select></select>
          <select id="minuteFinModifier">
          <option value="0">0Min</option>
            <option value="1">1Min</option>
            <option value="2">2Min</option>
            <option value="3">3Min</option>
            <option value="4">4Min</option>
            <option value="5">5Min</option>
            <option value="6">6Min</option>
            <option value="7">7Min</option>
            <option value="8">8Min</option>
            <option value="9">9Min</option>
            <option value="10">10Min</option>
            <option value="11">11Min</option>
            <option value="12">12Min</option>
            <option value="13">13Min</option>
            <option value="14">14Min</option>
            <option value="15">15Min</option>
            <option value="16">16Min</option>
            <option value="17">17Min</option>
            <option value="18">18Min</option>
            <option value="19">19Min</option>
            <option value="20">20Min</option>
            <option value="21">21Min</option>
            <option value="22">22Min</option>
            <option value="23">23Min</option>
            <option value="24">24Min</option>
            <option value="25">25Min</option>
            <option value="26">26Min</option>
            <option value="27">27Min</option>
            <option value="28">28Min</option>
            <option value="29">29Min</option>
            <option value="30">30Min</option>
            <option value="31">31Min</option>
            <option value="32">32Min</option>
            <option value="33">33Min</option>
            <option value="34">34Min</option>
            <option value="35">35Min</option>
            <option value="36">36Min</option>
            <option value="37">37Min</option>
            <option value="38">38Min</option>
            <option value="39">39Min</option>
            <option value="40">40Min</option>
            <option value="41">41Min</option>
            <option value="42">42Min</option>
            <option value="43">43Min</option>
            <option value="44">44Min</option>
            <option value="45">45Min</option>
            <option value="46">46Min</option>
            <option value="47">47Min</option>
            <option value="48">48Min</option>
            <option value="49">49Min</option>
            <option value="50">50Min</option>
            <option value="51">51Min</option>
            <option value="52">52Min</option>
            <option value="53">53Min</option>
            <option value="54">54Min</option>
            <option value="55">55Min</option>
            <option value="56">56Min</option>
            <option value="57">57Min</option>
            <option value="58">58Min</option>
            <option value="59">59Min</option>
          </select>
        </form>

        <button id="btnModifierEvenement">Modifier Événement</button>

      </div>
    </div>

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



    // recupere le span pour close
    var span = document.getElementsByClassName("close")[0];

    // quand user click ferme modal
    document.getElementById('close-modal').onclick = function () {
      modal.style.display = "none";
    }


    // quand user click <span> (x), ferme le modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // quand user click out side de box sa ferme
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  </script>

</body>

</html>