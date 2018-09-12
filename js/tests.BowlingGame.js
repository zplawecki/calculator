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

function enterName() {
    var Input = require('prompt-input');
    var score = [];
    var name = new Input({
        name: "name",
        message: "What is your name?"
    });

    name.ask(function(answers) {
        console.log("Hello " + answers);
    });

    for (i = 0; i < 11; i++) {
       frameScore = Math.floor((Math.random() * 10 ) +1);
       score.push(frameScore);
    }
}

function score(s) {
    const score = s;
    return score.reduce((s, n) => s + n);
}

enterName();
console.log(test_game(score(s)));
console.log(score(s));