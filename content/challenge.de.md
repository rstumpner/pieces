+++
url = "challenge"
title = "Deine Challenge"
+++

<link rel="stylesheet" href="../customStyles.css">
<script type="text/javascript" src="../jquery.min.js"></script>
<script type="text/javascript" src="../qrcode.js"></script>
<script type="text/javascript" src="../challengeSearch.js"></script>

<script type="text/javascript">
    $(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json"
        attributes = ["Players", "Duration", "Level"];
        language = "en";
        document.getElementById("languageLink").href = window.location.href.replace("/en", "");
    } else {
        document.getElementById("languageLink").href = window.location.href.replace("/challenge", "/en/challenge");
    }
    document.getElementById("langSwitch").href = document.getElementById("languageLink").href;

    searchForChallenge();
    addEventListener();
    });

</script>

<div id="challenge">
<div class="headlineWrapper">
    <div id="challengeIcon" class="level1"></div>
    <div>
        <!-- <div class="box"> -->
        </div>
        <h1 class="title" id="title">Titel</h1>
</div>

<div class="challengeWrapper" id="challengeWrapper">
        <div class="challengeAttributes">
        <span id="descriptionWrapper"><span id="description"></span></span>
        <span id="levelWrapper"><strong>Level:</strong> <span id="level"></span></span>
        <span id="durationWrapper"><strong>Dauer:</strong> <span id="duration"></span></span>
        <span id="equipmentWrapper"><strong>Material:</strong> <span id="equipment"></span></span>
        </div>
        <div id="challengeQRCode" class="qrCodeParentContainer">
            <a href="" id="instructionsLink" class="qrCodeWrapper">
                <div id="qrCodeInstructions"></div>
                <p>Erklärungs-Link</p>
            </a>
            <a href="" id="challengeLink" class="qrCodeWrapper">
                <div id="qrcode"></div>
                <p>Challenge-Link</p>
            </a>
            </div>
        </div>
        <div class="informationWrapper">
            <div class="informationIcon"></div>
            <span class="informationText">Drücke auf den QR-Code oder scanne ihn, um den Link zu öffnen.<span>
        </div>
</div>
</div>

<div id="error" class="deactivated">
    <h2>Fehler:</h2>
    <p>Challenge konnte nicht gefunden werden.</p>
    <p>Stelle bitte sicher, dass der eingegebene Challenge-Code korrekt ist.</p>
    <input id="reloadButton" type="button" value="Seite aktualisieren" class="button">
</div>



