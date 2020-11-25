// var image = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var randomIndex1 = Math.floor(Math.random()*6) + 1;
var randomIndex2 = Math.floor(Math.random()*6) + 1;

img1.setAttribute("src" , "images/dice" + randomIndex1 + ".png");
img2.setAttribute("src" , "images/dice" + randomIndex2 + ".png");

if (randomIndex1 > randomIndex2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if (randomIndex1 === randomIndex2){
    document.querySelector("h1").innerHTML = "Draw";
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}