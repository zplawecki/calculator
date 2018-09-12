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
//Program asks for scores of 10 frames
//Adds them to an array
//Calculates final score from elements of array

function enterNameAndScore() {
    var Input = require('prompt-input');
    var score = [];
    var name = new Input({
        name: "name",
        message: "What is your name?"
    });

    name.ask(function(answers) {
        console.log("Hello " + answers);
    });

    for (i = 0; i < 10; i++) {
        var scores = new Input({
            name: "score",
            message: "Podaj wynik ramki nr " + i
        });
    
        scores.ask(function(answers) {
            score.push(answers);
        });
    }

}

function score(s) {
    const score = s
        .split(',')
        .map(n => parseInt(n, 10));
    return score.reduce((s, n) => s + n);
}

enterNameAndScore();
// s = "10,10,10,10,10,10,10,10,10,10,10,10,10";
// console.log(test_game(score(s)));
// console.log(score(s));

