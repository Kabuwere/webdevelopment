// alert("hae")
// for player 1
var randomNumberplayer1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumberplayer1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// for player 2
var randomNumberplayer2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumberplayer2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// choosing a winner
if (randomNumberplayer1 > randomNumberplayer2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumberplayer2 >randomNumberplayer1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML ="DRAW!";
}
