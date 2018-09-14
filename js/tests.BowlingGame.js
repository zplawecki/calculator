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
//TODO:
//two rolls for every turn
//edgecases:
//for strike - add bonus = score from next 2 rolls
//for spare - add bonus = score from next roll
//for 10th frame - extra roll for spare or strike (no more than 3 rolls total)

var scores = [];
var frames = [];
var currentFrameScore;
var currentRollScore;
var pinsLeft;
var currentFrameNumber = 1;

function roll(pins) {
    currentRollScore = Math.floor(Math.random() * pins);
    scores.push(currentRollScore);
    pinsLeft = 10 - currentRollScore;
    return currentRollScore;
}

function currentFrameScore() {
    let currentFrameScore = roll(11) + roll(pinsLeft);
    return currentFrameScore;
}

function strikeBonus() {
    for (var i=0; i < scores.length; i++) {
        if (scores[i].name === 10) {
            return scores[i];
        }
    }
}

function spareBonus() {
    return currentFrameScore + currentRollScore[i+1];
}

function framesWithStrike(scores, val) {
    var indexes = [], i;
    for(i = 0; i < scores.length; i++)
        if (scores[i] === val)
        indexes.push(i+1);
    return indexes;
}

function groupRoundsInFrames(scores, size) {
    var frames = [];
    pairs = scores.map((x, i) => i % size == 0 && scores.slice(i, i + size)).filter(x => x);
    frames.push(pairs);
    return frames;
}

function enterFrameScore() {
    for (i = 1; i < 11; i++) {
        currentFrameNumber++;
        currentFrameScore();
    }
    return scores;
}

function score(scores) {
    var totalScore;
    totalScore = scores.reduce((s, n) => s + n);
    return totalScore;
}

enterFrameScore();
console.log("Wynik rundy numer 5: "+scores[4]);
console.log(groupRoundsInFrames(scores, 2));
console.log("Strike w ramce numer: "+framesWithStrike(frames, 10));
console.log(test_game(score(scores)));
console.log(score(scores));