+++
url = 'vergabe'
title = 'Challenge-Distribution'
+++

<link rel="stylesheet" href="../../customStyles.css">
<script type="text/javascript" src="../../jquery.min.js"></script>
<script type="text/javascript" src="../../qrcode.js"></script>
<script type="text/javascript" src="../../challengeHandler.js"></script>

<div class="headlineWrapper">
    <div id="challengeIcon" class="level1"></div>
    <div>
        <!-- <div class="box"> -->
        </div>
        <h1 class="title" id="title">Title</h1>
    </div>
</div>

<div class="challengeWrapper">
        <div class="challengeAttributes">
        <span id="descriptionWrapper"><span id="description"></span></span>
        <span id="playerCountWrapper"><strong>Persons:</strong> <span id="playerCount"></span></span>
        <span id="levelWrapper"><strong>Level:</strong> <span id="level"></span></span>
        <span id="durationWrapper"><strong>Duration:</strong> <span id="duration"></span></span>
        <span id="equipmentWrapper"><strong>Equipment:</strong> <span id="equipment"></span></span>
        </div>
        <div class="qrCodeParentContainer">
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
            <span>Time:</span><input type="text" value="15s" id="timeInput"/>
        </div>
    </div>
</div>