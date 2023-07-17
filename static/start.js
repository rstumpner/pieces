$(document).ready(function () {
    document.getElementById("submitInput").addEventListener("click", () => {
        window.location = window.location.href + "/challenge.html#" + document.getElementById("codeInput").value;
    })
});