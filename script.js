var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6    //random number generator

document.querySelector(".img1").setAttribute(("src"), "images/dice" + randomNumber1 + ".png"); //random image generator

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6    //random number generator

document.querySelector(".img2").setAttribute(("src"), "images/dice" + randomNumber2 + ".png"); //random image generator

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Antoine Wins 🥳";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Mairokola Wins 🥳";
} else {
    document.querySelector("h1").innerHTML = "Draw! 🤝";
}

//the code for a button that rolls the dice when clicked
//the button should trigger a refresh of the page
document.querySelector("button").addEventListener("click", function() {
     location.reload();
 });
