var target = document.getElementById("target");
var score = document.getElementById("score");

target.addEventListener("click", function() {
    var currentScore = parseInt(score.innerText);
    var newScore = currentScore + 1;
    score.innerText = newScore;
});

setInterval(function() {
    var randomX = Math.floor(Math.random() * 500);
    var randomY = Math.floor(Math.random() * 300);
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}, 2000);
