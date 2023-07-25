var jsonLocation = "../challenges.json";
var language = "de";
var attributes = ["Personen", "Dauer", "Level"];

function deactivateFields() {
    document.getElementById("challengeWrapper").classList.add("deactivated");
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

            new QRCode(document.getElementById("qrcode"), window.location.href, {
                width: 300,
                height: 300
            });
        }
    });
}

function addEventListener() {
    document.getElementById("reloadButton").addEventListener("click", () => {
        location.reload();
    })
}