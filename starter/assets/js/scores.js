function printHighScore(){
 //ToDO
    let highScore = JSON.parse(localStorage.getItem("highscores")) || [];

    highScore.sort(function(a,b){
        return b.score - a.score;

    })

    highScore.forEach(function(score){
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`

        let ol = document.getElementById("highscore");
        ol.appendChild(li);

    })
}

function clearHighScore(){

    localStorage.removeItem("highscore");
    window.location.reload();
//ToDo
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("clear", clearHighScores);

printHighScore();