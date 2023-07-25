var lastChallenge;
var timeout;
var jsonLocation = "../challenges.json";
var attributes = ["Personen", "Dauer", "Level"];
var language = "de";
var baseURL;
const timeoutLength = 15000;

$(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json";
        attributes = ["Players", "Duration", "Level"];
        language = "en";
    }
    var link = document.getElementById("languageLink").href + "#" + window.location.href.split("#")[1];
    document.getElementById("langSwitch").href = document.getElementById("languageLink").href = link;
    baseURL = document.getElementById("homeButton").href;

    addEventListener();
    if (!searchForChallenge()) {
        GetNewChallenge();
    }
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
            if (json[i]["Level"] == level && lastChallenge != json[i]["titel_de"]) {
                filteredArray.push(json[i])
            }
        }

        let obj = filteredArray[getRandomInt(0, filteredArray.length)];
        lastChallenge = obj["titel_de"];

        if (language == "de") {
            document.getElementById("title").textContent = obj["titel_de"];
            document.getElementById("description").textContent = obj["description_de"];
        } else if (language == "en") {
            document.getElementById("title").textContent = obj["titel_en"];
            document.getElementById("description").textContent = obj["description_en"];
        }
        document.getElementById("playerCount").textContent = attributes[0] + ": " + obj["Anzahl der Mitspieler"];
        document.getElementById("duration").textContent = attributes[1] + ": " + obj["Dauer (Minuten)"] + " Minuten";
        document.getElementById("level").textContent = attributes[2] + ": " + obj["Level"];
        document.getElementById("qrcode").innerHTML = "";

        window.location.href = window.location.href.split("#")[0] + "#" + obj["id"];
        document.getElementById("languageLink").href = document.getElementById("languageLink").href.split("#")[0] + "#" + obj["id"];

        new QRCode(document.getElementById("qrcode"), baseURL + "challenge/#" + obj.id, {
            width: 300,
            height: 300
        });
    });
}

function searchForChallenge() {
    var id = window.location.href.split('#')[1];
    if (id == undefined) {
        return false;
    }
    id = id.replaceAll("/", "");

    $.getJSON(jsonLocation, function (json) {
        // if id's are in order use selector, otherwise search for .id
        if (!isNumeric(id) || id > json.length || id < 1) {
            return false;
        } else {
            var obj = json[id - 1];

            if (language == "de") {
                document.getElementById("title").textContent = obj["titel_de"];
                document.getElementById("description").textContent = obj["description_de"];
            } else if (language == "en") {
                document.getElementById("title").textContent = obj["titel_en"];
                document.getElementById("description").textContent = obj["description_en"];
            }
            document.getElementById("playerCount").textContent = attributes[0] + ": " + obj["Anzahl der Mitspieler"];
            document.getElementById("duration").textContent = attributes[1] + ": " + obj["Dauer (Minuten)"] + " Minuten";
            document.getElementById("level").textContent = attributes[2] + ": " + obj["Level"];
            document.getElementById("qrcode").innerHTML = "";

            new QRCode(document.getElementById("qrcode"), baseURL + "challenge/#" + obj.id, {
                width: 300,
                height: 300
            });
        }
    });
    return true;
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