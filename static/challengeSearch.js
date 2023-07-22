var jsonLocation = "../challenges.json";

$(document).ready(function () {
    if (window.location.href.includes("/en")) {
        jsonLocation = "../../challenges.json"
        attributes = ["Players", "Duration", "Level"];
        document.getElementById("languageLink").href = window.location.href.replace("/en", "");
    } else {
        document.getElementById("languageLink").href = window.location.href.replace("pieces/", "pieces/en/");
    }



    searchForChallenge();
    addEventListener();
});

function addEventListener() {
    document.getElementById("reloadButton").addEventListener("click", () => {
        location.reload();
    })
}

function deactivateFields() {
    document.getElementById("challenge").classList.add("deactivated");
    document.getElementById("error").classList.remove("deactivated");
}

function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function searchForChallenge() {
    var id = window.location.href.split('#')[1];
    if (id == undefined) {
        deactivateFields();
        return;
    }
    id = id.replaceAll("/", "");

    $.getJSON(jsonLocation, function (json) {
        // if id's are in order use selector, otherwise search for .id
        if (!isNumeric(id) || id > json.length || id < 1) {
            deactivateFields();
        } else {
            var obj = json[id - 1];

            document.getElementById("title").innerHTML = obj["Name der Chellange"];
            document.getElementById("description").innerHTML = obj["Beschreibung"];
            document.getElementById("playerCount").innerHTML = "Personen: " + obj["Anzahl der Mitspieler"];
            document.getElementById("duration").innerHTML = "Dauer: " + obj["Dauer (Minuten)"] + " Minuten";
            document.getElementById("level").innerHTML = "Level: " + obj["Level"];
        }
    });

    new QRCode(document.getElementById("qrcode"), window.location.href, {
        width: 300,
        height: 300
    });
}