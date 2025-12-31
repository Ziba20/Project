function updatePlayerName() {
var title1 = document.getElementsByClassName("fplayer");
var title2 = title1.value;

document.querySelector(".bEnter").addEventListener("click", function() {

document.getElementById('playername').textContent = "Welcome Player: " + title2 + "!";

});
};




// <button onclick="location.href='about.html'">Enter</button>