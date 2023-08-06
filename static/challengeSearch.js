var qrCode, qrCodeVideo;
var jsonLocation = "../challenges.json";
var language = "de";
var attributes = ["Personen", "Dauer", "Level"];

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

            SetChallengeValues(obj);
        }
    });
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
        document.getElementById("title").textContent = (obj["titel_en"] != null) ? obj["titel_en"] : obj["titel_de"];
        document.getElementById("description").textContent = (obj["description_en"] != null) ? obj["description_en"] : obj["description_de"];
        document.getElementById("duration").textContent += " minutes";

        if (obj["titel_en"] == null || obj["description_en"] == null) {
            $(".translationWarning").first().show();
        } else {
            $(".translationWarning").first().hide();
        }
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

    createQRCode(window.location.href);
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
            width: 128,
            height: 128,
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
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.Q
        });
    } else {
        qrCodeVideo.clear();
        qrCodeVideo.makeCode(input);
    }
    document.getElementById("instructionsLink").setAttribute("href", input);
}

function addEventListener() {
    document.getElementById("reloadButton").addEventListener("click", () => {
        location.reload();
    })
}