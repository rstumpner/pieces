var lastChallenge;
var timeout;
var jsonLocation = "../challenges.json";
var attributes = ["Personen", "Dauer", "Level"];
const timeoutLength = 15000;
const baseURL = "http://localhost:1313/pieces/";

$(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json"
        attributes = ["Players", "Duration", "Level"];
    }

    addEventListener();
    GetNewChallenge();
    checkRotationBox();

});

function addEventListener() {
    document.getElementById("autoRotation").addEventListener("click", () => {
        checkRotationBox();
    })
}

function checkRotationBox() {
    if (document.getElementById("autoRotation").checked) {
        clearTimeout(timeout);
        timeout = setTimeout(autoRotation, timeoutLength);
    } else {
        clearTimeout(timeout);
    }
}

function autoRotation() {
    clearTimeout(timeout);
    GetNewChallenge();
    if (document.getElementById("autoRotation").checked) {
        timeout = setTimeout(autoRotation, timeoutLength);
    }
}

function GetNewChallenge() {
    let level = document.getElementById("levelSelection").value;

    $.getJSON(jsonLocation, function (json) {

        let filteredArray = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i]["Level"] == level && lastChallenge != json[i]["Name der Chellange"]) {
                filteredArray.push(json[i])
            }
        }

        let obj = filteredArray[getRandomInt(0, filteredArray.length)];
        lastChallenge = obj["Name der Chellange"];

        document.getElementById("title").textContent = obj["Name der Chellange"];
        document.getElementById("description").textContent = obj["Beschreibung"];
        document.getElementById("playerCount").textContent = attributes[0] + ": " + obj["Anzahl der Mitspieler"];
        document.getElementById("duration").textContent = attributes[1] + ": " + obj["Dauer (Minuten)"] + " Minuten";
        document.getElementById("level").textContent = attributes[2] + ": " + obj["Level"];
        document.getElementById("qrcode").innerHTML = "";

        new QRCode(document.getElementById("qrcode"), baseURL + "challenge.html#" + obj.id, {
            width: 300,
            height: 300
        });
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}