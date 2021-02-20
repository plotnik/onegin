$(function () {
    loadVerse();
});
function loadVerse() {
    $.get("https://api.gamma.dev.appery.io/rest/1/code/onegin/exec").then(function (robot) {
        $("#onegin")[0].innerHTML = robot.result;
    });
}
