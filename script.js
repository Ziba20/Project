const title1 = document.getElementByClassName("fplayer");
let result = "document.getElementsByClassName('fplayer')";
for (const el of title1) {
  result += `\n ${el.textContent}`;
}




document.getElementByClassName("playerName").value = result;


//document.getElementByClassName("bEnter").addEventListener("click", iOutput);