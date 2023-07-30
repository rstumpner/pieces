+++
url = 'vergabe'
title = 'Challenge-Vergabe'
+++

<link rel="stylesheet" href="../customStyles.css">
<script type="text/javascript" src="../jquery.min.js"></script>
<script type="text/javascript" src="../qrcode.js"></script>
<script type="text/javascript" src="../challengeHandler.js"></script>

<div class="headlineWrapper">
    <div id="challengeIcon" class="level1"></div>
    <div>
        <!-- <div class="box"> -->
        </div>
        <h1 class="title" id="title">Titel</h1>
    </div>
</div>

<div class="challengeWrapper">
        <p id="description">Beschreibung</p>
        <div class="challengeAttributes">
            <span id="playerCount">Personen:</span>
            <span id="level">Level: </span>
            <span id="duration">Dauer: </span>
        </div>
        <div id="qrcode"></div>
</div>

<div id="parentContainer">
    <div class="hideContainer">
        <input type="checkbox" id="hideButton" checked>
    </div>
    <div id="interactionContainer">
        <input type="checkbox" value="previousChallenge" id="backwardButton">
        <input type="checkbox" value="rotation" id="playButton" unchecked>
        <input type="checkbox" value="newChallenge" id="forwardButton">
    </div>
    <div id="settingsContainer">
        <div class="childDiv">
            <span>Level:</span>
            <select name="level" id="levelSelection">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div class="childDiv">
            <span>Zeit:</span><input type="text" value="15s" id="timeInput"/>
        </div>
    </div>
</div>

