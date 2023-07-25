+++
url = 'vergabe'
title = 'Challenge-Distribution'
+++

<link rel="stylesheet" href="../../customStyles.css">
<script type="text/javascript" src="../../jquery.min.js"></script>
<script type="text/javascript" src="../../qrcode.js"></script>
<script type="text/javascript" src="../../challengeHandler.js"></script>

<p style="margin-bottom: 10px">Choose a level and push the button to receive a challenge!</p>
<span>Level:</span>
<select name="level" id="levelSelection" style="margin-bottom: 20px;">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<input type="button" value="New Challenge" id="challengeButton" class="button newChallenge" onclick="GetNewChallenge()">
<br>
<input type="checkbox" id="autoRotation" value="rotation" unchecked>
<label for="autoRotation">Auto-Rotation</label><br>

<hr class="horizontalLine"></hr>

<div class="box">
        </div>
<h3 class="title" id="title">Title</h3>

<div class="challengeWrapper">
        <p id="description">Description</p>
        <div>
            <span id="playerCount">Persons:</span>
            <span id="level">Level: </span>
            <span id="duration">Duration: </span>
        </div>
        <div id="qrcode"></div>
</div>

