+++
url = "challenge"
title = "Challenge"
+++

<link rel="stylesheet" href="../../customStyles.css">
<script type="text/javascript" src="../../jquery.min.js"></script>
<script type="text/javascript" src="../../qrcode.js"></script>
<script type="text/javascript" src="../../challengeSearch.js"></script>

<script type="text/javascript">
    $(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json"
        attributes = ["Players", "Duration", "Level"];
        language = "en";
        document.getElementById("languageLink").href = window.location.href.replace("/en", "");
    } else {
        document.getElementById("languageLink").href = window.location.href.replace("pieces/", "pieces/en/");
    }
    document.getElementById("langSwitch").href = document.getElementById("languageLink").href;

    searchForChallenge();
    addEventListener();
    });

</script>

<div id="challengeWrapper">
        <h1>Your challenge</h1>
        <div class="box">
        </div>
        <h3 class="title" id="title">Title</h3>
        <p id="description">Description</p>
        <div>
            <span id="playerCount">Persons:</span>
            <span id="level">Level: </span>
            <span id="duration">Duration: </span>
        </div>
        <div id="qrcode"></div>
</div>
<div id="error" class="deactivated">
    <h2>Error:</h2>
    <p>Challenge could not be found.</p>
    <p>Please ensure the code is valid.</p>
    <input id="reloadButton" type="button" value="Seite aktualisieren" class="button">
</div>



