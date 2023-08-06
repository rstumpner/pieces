var lastChallenge, timeout, challengeIndex, qrCode, qrCodeVideo, baseURL;
var jsonLocation = "../challenges.json";
var language = "de";
var timeoutLength = 15000;
var previousChallenges = [];


$(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json";
        language = "en";
    }
    var link = document.getElementById("languageLink").href + "#" + window.location.href.split("#")[1];
    GetIntervalTime();
    document.getElementById("langSwitch").href = document.getElementById("languageLink").href = link;
    baseURL = document.getElementById("homeButton").href;

    searchForChallenge();
    checkRotationBox();
});

function addEventListener() {
    document.getElementById("playButton").addEventListener("click", () => {
        checkRotationBox();
    })
    document.getElementById("hideButton").addEventListener("click", () => {
        hideContainer();
    })
    document.getElementById("forwardButton").addEventListener("click", () => {
        GetNewChallenge();
    })
    document.getElementById("backwardButton").addEventListener("click", () => {
        GetPreviousChallenge();
    })
    document.getElementById("timeInput").addEventListener("change", () => {
        GetIntervalTime();
    })
}

function hideContainer() {
    var isChecked = document.getElementById("hideButton").checked;

    if (!isChecked) {
        $("#interactionContainer").hide();
        $("#settingsContainer").hide();
        $("#parentContainer").addClass("removeBorder");
    } else {
        $("#interactionContainer").show();
        $("#settingsContainer").show();
        $("#parentContainer").removeClass("removeBorder");
    }
}

function checkRotationBox() {
    if (document.getElementById("playButton").checked) {
        clearTimeout(timeout);
        timeout = setTimeout(autoRotation, timeoutLength);
        GetIntervalTime();
    } else {
        clearTimeout(timeout);
    }
}

function autoRotation() {
    clearTimeout(timeout);
    GetNewChallenge();
    if (document.getElementById("playButton").checked) {
        timeout = setTimeout(autoRotation, timeoutLength);
    }
}

function GetIntervalTime() {
    var input = document.getElementById("timeInput").value;
    var time = input.replaceAll(/\D/g, "") * 1000; // input in seconds, convert to milliseconds
    if (input.includes("min")) time += 60;
    timeoutLength = time;
    if (GetIntervalTime.caller.name != "checkRotationBox") checkRotationBox();
}

function GetPreviousChallenge() {
    $.getJSON(jsonLocation, function (json) {

        if (challengeIndex > 0) challengeIndex--;

        for (var i = 0; i < json.length; i++) {
            if (previousChallenges[challengeIndex] == json[i]["titel_de"]) {
                obj = json[i];
            }
        }
        lastChallenge = obj["titel_de"];

        SetChallengeValues(obj)
    });
}

function GetNewChallenge() {
    let level = document.getElementById("levelSelection").value;

    $.getJSON(jsonLocation, function (json) {

        let filteredArray = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i]["Level"] == level && lastChallenge != json[i]["titel_de"]) {
                filteredArray.push(json[i])
            }
        }

        let obj = filteredArray[getRandomInt(0, filteredArray.length)];
        lastChallenge = obj["titel_de"];
        if (challengeIndex == undefined) {
            challengeIndex = 0;
        } else {
            challengeIndex++;
        }
        previousChallenges.push(lastChallenge);
        SetChallengeValues(obj)
    });
}

function searchForChallenge() {
    var id = window.location.href.split('#')[1];
    if (id == undefined) {
        GetNewChallenge();
        return;
    }
    id = id.replaceAll("/", "");

    $.getJSON(jsonLocation, function (json) {
        // if id's are in order use selector, otherwise search for .id
        if (!isNumeric(id) || id > json.length || id < 1) {
            GetNewChallenge();
            return;
        } else {
            var obj = json[id - 1];

            lastChallenge = obj["titel_de"];
            if (challengeIndex == undefined) {
                challengeIndex = 0;
            } else {
                challengeIndex++;
            }
            previousChallenges.push(lastChallenge)
            SetChallengeValues(obj)
        }
    });
    return true;
}

function SetChallengeValues(obj) {
    if (obj["Dauer (Minuten)"] == null) {
        document.getElementById("duration").textContent = "?";
    } else {
        document.getElementById("duration").textContent = obj["Dauer (Minuten)"];
    }

    if (language == "de") {
        document.getElementById("title").textContent = obj["titel_de"];
        document.getElementById("description").textContent = obj["description_de"];
        document.getElementById("duration").textContent += " Minuten";
    } else if (language == "en") {
        document.getElementById("title").textContent = obj["titel_en"];
        document.getElementById("description").textContent = obj["description_en"];
        document.getElementById("duration").textContent += " minutes";
    }

    document.getElementById("level").textContent = obj["Level"];

    if (obj["Material"] != "") {
        document.getElementById("equipment").textContent = obj["Material"];
    } else {
        document.getElementById("equipment").textContent = "-";
    }

    // change src of level-icon
    document.getElementById("challengeIcon").removeAttribute('class');
    document.getElementById("challengeIcon").classList.add("level" + obj["Level"]);

    createQRCode(baseURL + "challenge/#" + obj["ID"]);
    if (obj["Anleitung"] != null) {
        $(".qrCodeWrapper").first().show();
        createInstructionsQRCode(obj["Anleitung"])
    } else {
        $(".qrCodeWrapper").first().hide();
    }
}

function createQRCode(input) {
    if (qrCode == undefined) {
        qrCode = new QRCode(document.getElementById("qrcode"), {
            text: input,
            width: 192,
            height: 192,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        qrCode.clear();
        qrCode.makeCode(input);
    }
    document.getElementById("challengeLink").setAttribute("href", input);
}

function createInstructionsQRCode(input) {
    if (qrCodeVideo == undefined) {
        qrCodeVideo = new QRCode(document.getElementById("qrCodeInstructions"), {
            text: input,
            width: 192,
            height: 192,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        qrCodeVideo.clear();
        qrCodeVideo.makeCode(input);
    }
    document.getElementById("instructionsLink").setAttribute("href", input);
}

function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}