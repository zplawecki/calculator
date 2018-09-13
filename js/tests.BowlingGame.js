function test_game(score) {
    if (score < 130) {
        return "ok, score is correct";
    }
    else if (score == 130) {
        return "ok, score is perfect";
    }
    else {
         return "fail, score is incorrect";
    }
}

//Description:
//Program returns 11 random numbers from 0 to 10 and assignes them as frame score
//Adds them to an array
//Calculates final score from elements of array
var scores = [];
function enterFrameScore() {
    for (i = 0; i < 11; i++) {
        var frameScore = Math.floor(Math.random() * 10);
        scores.push(frameScore);
    }
    console.log(scores.toString());
    return scores;
}

function score(scores) {
    var totalScore;
    totalScore = scores.reduce((s, n) => s + n);
    return totalScore;
}

enterFrameScore();
console.log(test_game(score(scores)));
console.log(score(scores));