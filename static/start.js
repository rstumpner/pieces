$(document).ready(function () {
    document.getElementById("submitInput").addEventListener("click", () => {
        window.location = window.location.href.split("#")[0] + "challenge/#" + document.getElementById("codeInput").value;
    })
});