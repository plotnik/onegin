$(function () {
    loadVerse();
});

function loadVerse(): void {
    $.get("https://api.gamma.dev.appery.io/rest/1/code/onegin/exec").then(robot => {
        $("#onegin")[0].innerHTML = robot.result;
    });
}