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

function score(s) {
    const numbers = s
        .split(',')
        .map(n => parseInt(n, 10));
    return numbers.reduce((s, n) => s + n);
}

s = "10,10,10,10,10,10,10,10,10,10";
console.log(test_game(s));
console.log(score(s));