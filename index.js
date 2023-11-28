// First dice
function changeDiceImage1() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var imagePath = "images/dice" + randomNumber + ".png";
  x = [randomNumber, imagePath];
  return x;
}

// second dice
function changeDiceImage2() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var imagePath = "images/dice" + randomNumber + ".png";
  x = [randomNumber, imagePath];
  return x;
}
var resultx = changeDiceImage1();
var resulty = changeDiceImage2();
var x = resultx[1];
var y = resulty[1];

document.querySelector(".img1").src = x;
document.querySelector(".img2").src = y;

var randx = resultx[0];
var randy = resulty[0];

if (randx > randy) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randy > randx) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
