var lastChallenge = undefined;
const baseURL = "http://localhost:1313/pieces/";

$(document).ready(function () {
    GetNewChallenge();
});

function GetNewChallenge() {
    let level = document.getElementById("levelSelection").value;

    $.getJSON("challenges.json", function (json) {

        let filteredArray = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i]["Level"] == level) {
                filteredArray.push(json[i])
            }
        }

        let obj = filteredArray[getRandomInt(0, filteredArray.length)];

        if (lastChallenge == obj["id"] && filteredArray.length > 1) {
            GetNewChallenge();
            return;
        } else {
            lastChallenge = obj["id"];
        }

        document.getElementById("title").textContent = obj["Name der Chellange"];
        document.getElementById("description").textContent = obj["Beschreibung"];
        document.getElementById("playerCount").textContent = "Personen: " + obj["Anzahl der Mitspieler"];
        document.getElementById("duration").textContent = "Dauer: " + obj["Dauer (Minuten)"] + " Minuten";
        document.getElementById("level").textContent = "Level: " + obj["Level"];
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