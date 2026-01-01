function updatePlayerName() {
var title1 = document.getElementById("fplayer");
var title2 = title1;

document.querySelector(".bEnter").addEventListener("click", function() {
    const name1 = document.getElementById("playerName");
    window.location.href = "about.html";
    name1.textContent = "Welcome Player: " + title2 + "!";

});
}

// document.getElementById("playerName").textContent = "Welcome Player: " + title2 + "!";