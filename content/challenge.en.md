+++
url = "challenge"
title = "Your challenge"
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

<div id="challenge">
<div class="headlineWrapper">
    <div id="challengeIcon" class="level1"></div>
    <div>
        <!-- <div class="box"> -->
        </div>
        <h1 class="title" id="title">Title</h1>
</div>

<div class="challengeWrapper">
        <div class="challengeAttributes">
        <span id="descriptionWrapper"><span id="description"></span></span>
        <span id="levelWrapper"><strong>Level:</strong> <span id="level"></span></span>
        <span id="durationWrapper"><strong>Duration:</strong> <span id="duration"></span></span>
        <span id="equipmentWrapper"><strong>Equipment:</strong> <span id="equipment"></span></span>
        </div>
        <div id="challengeQRCode" class="qrCodeParentContainer">
            <a href="" id="instructionsLink" class="qrCodeWrapper">
                <div id="qrCodeInstructions"></div>
                <p>Instructions-Link</p>
            </a>
            <a href="" id="challengeLink" class="qrCodeWrapper">
                <div id="qrcode"></div>
                <p>Challenge-Link</p>
            </a>
            </div>
        </div>
        <div class="informationWrapper">
            <div class="informationIcon"></div>
            <span class="informationText">Press the QR-Code or scan it to open the link.<span>
        </div>
        <div class="informationWrapper translationWarning">
            <div class="informationIcon"></div>
            <span class="informationText">There might not be a translation available, in this case translate it yourself or ask for help.<span>
        </div>
</div>
</div>

<div id="error" class="deactivated">
    <h2>Error:</h2>
    <p>Challenge could not be found.</p>
    <p>Please ensure the code is valid.</p>
    <input id="reloadButton" type="button" value="Refresh page" class="button">
</div>



