+++
url = "challenge"
title = "Aufgabe"
+++

<link rel="stylesheet" href="../customStyles.css">
<script type="text/javascript" src="../jquery.min.js"></script>
<script type="text/javascript" src="../qrcode.js"></script>
<script type="text/javascript" src="../challengeSearch.js"></script>

<h1>Deine Challenge</h1>

<div class="box">
        </div>
<h3 class="title" id="title">Titel</h3>

<div class="challengeWrapper">
        <p id="description">Beschreibung</p>
        <div>
            <span id="playerCount">Personen:</span>
            <span id="level">Level: </span>
            <span id="duration">Dauer: </span>
        </div>
        <div id="qrcode"></div>
</div>
<div id="error" class="deactivated">
    <h1>Fehler:</h1>
    <p>Challenge konnte nicht gefunden werden.</p>
    <p>Stelle bitte sicher, dass der eingegebene Challenge-Code korrekt ist.</p>
    <input id="reloadButton" type="button" value="Seite aktualisieren" class="button">
</div>



